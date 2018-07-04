package com.b2wplatform.boot.service.location;

import com.b2wplatform.boot.Utils;
import com.b2wplatform.core.exception.B2WException;
import com.b2wplatform.model.location.LocationValue;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import enums.LocationStatus;
import enums.LocationType;
import org.apache.commons.lang3.RandomStringUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class PastsUtils {

    private static final Logger log = LoggerFactory.getLogger(PastsUtils.class);

    public  static List<LocationValue> defineLocationValuesForParent(LocationValue parentLocation) {

        LocationType childLocationTypes[] = LocationType.defineChildByParentType(parentLocation.getLocationType());

        if(childLocationTypes==null) {
            log.info("!!! Child location type not found for parent: "+parentLocation.getLocationType()+" !!!");
            return null;
        } else {
            List<LocationValue> rv = new ArrayList<>();
            for (LocationType childLocationType: childLocationTypes) {
                defineLocationsForParentByFields(parentLocation, rv, childLocationType);
            }
            return rv;
        }
    }

    private static List<LocationValue> defineLocationsForParentByFields(LocationValue parentLocation, List<LocationValue> rv, LocationType childLocationType) {
        String county="";
        String parish="";
        String village="";
        String street="";
        String city="";
        String fieldName="";
        String house="";


            switch (childLocationType) {

                case MUNICIPALITY:
                    fieldName="county";
                    break;

                case PARISH:
                    county =  findLocationValueByType(parentLocation, LocationType.MUNICIPALITY);
                    fieldName = "parish";
                    break;

                case CITY:
                    fieldName = "city";
                    break;

                case VILLAGE:
                    county = findLocationValueByType(parentLocation, LocationType.MUNICIPALITY);
                    parish = findLocationValueByType(parentLocation, LocationType.PARISH);
                    fieldName = "village";
                    break;

                case STREET:
                    city= findLocationValueByType(parentLocation, LocationType.CITY);
                    county =findLocationValueByType(parentLocation, LocationType.MUNICIPALITY);
                    parish = findLocationValueByType(parentLocation, LocationType.PARISH);
                    village = findLocationValueByType(parentLocation, LocationType.VILLAGE);
                    fieldName="street";
                    break;

                case BUILDING_NR:
                    city= findLocationValueByType(parentLocation, LocationType.CITY);
                    county =findLocationValueByType(parentLocation, LocationType.MUNICIPALITY);
                    parish = findLocationValueByType(parentLocation, LocationType.PARISH);
                    village = findLocationValueByType(parentLocation, LocationType.VILLAGE);
                    street = findLocationValueByType(parentLocation, LocationType.STREET);
                    fieldName="house";
                    break;
            }


        try {
            readFromPosts(parentLocation, county, parish, village, street, city, fieldName, house, childLocationType, rv);
            return rv;

        } catch (UnirestException e) {
            throw new B2WException(e);
        }
    }

    private static void readFromPosts(LocationValue parentLocation, String county, String parish, String village, String street, String city, String fieldName, String house, LocationType childLocationType, List<LocationValue> rv) throws UnirestException {

        Utils.randomSleep(20000);

        String body = "city=" + city + "&county=" + county + "&parish=" + parish + "&village=" + village + "&street=" + street + "&house=" + house + "&appartment=";

        log.debug("Start Request with body : " +body + "; Field name : "+fieldName);


        HttpResponse<JsonNode> jsonResponse = Unirest.post("http://pasts.lv/ajax/module:address_selector")
                .header("Accept", "application/json, text/javascript, */*; q=0.01")
                .header("Accept-Encoding", "gzip, deflate")
                .header("Accept-Language","en-US,en;q=0.5")
                .header("Cache-Control","no-cache")
                .header("Connection","keep-alive")
                .header("Content-Type","application/x-www-form-urlencoded; charset=UTF-8")
                .header("Cookie", genCookie())
                .header("Host","pasts.lv")
                .header("Pragma", "no-cache")
                .header("Referer", "http://pasts.lv/lv/kategorija/pasta_indeksa_meklesana/")
                .header("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0")
                .header("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0")

                .header("X-Requested-With","XMLHttpRequest")
                .queryString("search", "")
                .queryString("field", fieldName)
                .queryString("validate", "")
                .body(body)

                .asJson();

        log.debug("Request is finished with body : " +body + "; Field name : "+fieldName);


        if(!fieldName.equals("house")) {

            final JSONArray results = jsonResponse.getBody().getObject().getJSONArray("results");

            for (int i = 0; i < results.length(); i++) {
                String value = results.getString(i);
                LocationValue lv= new LocationValue();
                lv.setLocationValue(value);
                lv.setParentId(parentLocation.getId());
                lv.setParentLocationValue(parentLocation);
                lv.setLocationType(childLocationType);
                lv.setLocationStatus(LocationStatus.NO);
                rv.add(lv);
            }
        }  else {
            final JSONObject results = jsonResponse.getBody().getObject().getJSONObject("results");
            Iterator<String> keys = results.keys();
            while(keys.hasNext()) {
                LocationValue lv= new LocationValue();
                String externalId = keys.next();
                String value = results.getString(externalId);
                lv.setLocationValue(value);
                lv.setExternalId(externalId);
                lv.setParentId(parentLocation.getId());
                lv.setParentLocationValue(parentLocation);
                lv.setLocationType(childLocationType);
                lv.setLocationStatus(LocationStatus.NO);
                rv.add(lv);
            }

        }
    }


    private static String findLocationValueByType(LocationValue locationValue, LocationType locationType) {

        LocationValue locationByType = findLocationByType(locationValue, locationType);
        if(locationByType == null) {
            return "";
        } else {
            return locationByType.getLocationValue();
        }
    }

    private static LocationValue findLocationByType(LocationValue locationValue, LocationType locationType) {
        if(locationValue == null) {
            return null;
        }
        if(locationValue.getLocationType() == locationType) {
            return  locationValue;
        }

        return findLocationByType(locationValue.getParentLocationValue(), locationType);

    }

    public static String toLog(LocationValue locationValue) {
        return "["+locationValue.getId()+"]=>"+locationValue.getLocationValue()+"-"+locationValue.getLocationType()+"]";
    }


    public static String genCookie() {
        //return "_ga=GA1.2.654022229.1528278710; _gid=GA1.2.259431343.1530450420; PHPSESSID=h6lbm0c030agm4djtti54hvcloajnmsl048n3lpo95vaid5homf1";
        return "_ga=GA1.2."+RandomStringUtils.random(9, false, true).toLowerCase()+"."+RandomStringUtils.random(10, false, true).toLowerCase()+"; _gid=GA1.2."+RandomStringUtils.random(9, false, true).toLowerCase()+"."+RandomStringUtils.random(10, false, true).toLowerCase()+"; PHPSESSID="+RandomStringUtils.random(52, true, true).toLowerCase();
    }


    public static void main(String [] p) {
        System.out.println(genCookie());
    }
}
