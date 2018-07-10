import {ClientLocation} from "../model/client-location.class";


export class Utils {

  static readonly GEO_POST_CODE = "postal_code";
  static readonly GEO_HOUSE = "street_number";
  static readonly GEO_CITY ="locality";
  static readonly GEO_STREET="route";
  static readonly GEO_COUNTRY="country";


  public static extractValueFrom(place:any, fieldName:string):string {
    var filtered_array = place.address_components.filter(function(address_component){
      return address_component.types.includes(fieldName);
    });

    console.log(filtered_array);
    return filtered_array.length ? filtered_array[0].long_name: "";
  }

  static extractValueFromLocationInfo(locationInfo: any, geoItemName: string) {
    let locationItems  = locationInfo["results"];
    for (let locationItem of locationItems) {
      let geoName:string = this.extractValueFrom(locationItem, geoItemName);
      if(!Utils.isEmpty(geoName)) {
        return geoName;
      }
    }
    return "";
  }


  static fillAddressWithReceivedValues(address: ClientLocation, locationInfo: any) {
    address.street = this.extractValueFromLocationInfo(locationInfo, this.GEO_STREET);
    address.country = this.extractValueFromLocationInfo(locationInfo, this.GEO_COUNTRY);
    address.postCode = this.extractValueFromLocationInfo(locationInfo, this.GEO_POST_CODE);
    address.house = this.extractValueFromLocationInfo(locationInfo, this.GEO_HOUSE);
    address.city = this.extractValueFromLocationInfo(locationInfo, this.GEO_CITY);

    address.fullAddress =  [address.postCode, address.street, address.house, address.city, address.country].filter(Boolean).join(", ");
  }


  static isEmpty(str:string):boolean {
    if(typeof str === 'undefined' || str===null || str.length==0) {
      return true;
    } else {
      return false;
    }
  }
}
