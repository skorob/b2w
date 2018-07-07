package com.b2wplatform.boot.service.location;

import com.b2wplatform.core.exception.B2WInternalException;
import com.b2wplatform.model.location.LocationValue;
import enums.LocationStatus;
import enums.LocationType;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LocationImportService {


    private static final Logger log = LoggerFactory.getLogger(LocationImportService.class);

    @Autowired
    private LocationRepository locationRepository;

    public void start() {

        log.info("Start location synchronization");

        log.info("Find all locations ...");
        List<LocationValue> allLocations = locationRepository.findAll();

        log.info("Create structure with locations ...");
        Map<Long, LocationValue> structuredByIds = createStructure(allLocations);
        log.info("Structure with locations is created size : ["+structuredByIds.size()+"]");

        LocationValue lvLocValue = locationRepository.findFirstByLocationValue("Latvija");
        if(lvLocValue==null) {
            LocationValue  lv = new LocationValue();
            lv.setParentId(-1L);
            lv.setLocationValue("Latvija");
            lv.setLocationStatus(LocationStatus.NO);
            lv.setLocationType(LocationType.COUNTRY);
            lvLocValue = locationRepository.save(lv);

            List<LocationValue> locationValues = PastsUtils.defineLocationValuesForParent(lvLocValue);
            synchronizeLocationValues(lvLocValue,locationValues,structuredByIds);


            lvLocValue.setLocationType(null);
            locationValues = PastsUtils.defineLocationValuesForParent(lvLocValue);

            synchronizeLocationValues(lvLocValue,locationValues, structuredByIds);
        }
        recursiveExecution(structuredByIds);
        log.debug("Location Synchronization finished");

    }

    private void recursiveExecution(Map<Long, LocationValue> structuredByIds) {


        List<LocationValue> notExportedLocations = defineNonExported(structuredByIds);
        if(CollectionUtils.isEmpty(notExportedLocations)) {
            return;
        }

        for (LocationValue parentLocationValue : notExportedLocations) {

            List<LocationValue> locationValues = PastsUtils.defineLocationValuesForParent(parentLocationValue);

            synchronizeLocationValues(parentLocationValue,locationValues, structuredByIds);
        }

        recursiveExecution(structuredByIds);

    }

    private List<LocationValue> defineNonExported( Map<Long, LocationValue> structuredByIds) {
        List<LocationValue> nonExported = locationRepository.findLocationValuesByLocationStatusAndLocationTypeNot(LocationStatus.NO, LocationType.BUILDING_NR);
        List<LocationValue> rv = new ArrayList<>();
        for (LocationValue lv : nonExported) {
            rv.add(structuredByIds.get(lv.getId()));
        }

        return rv;

    }

    private Map<Long,LocationValue> createStructure(List<LocationValue> allLocations) {
        Map<Long, LocationValue> structure = new HashMap<>();
        for (LocationValue locationValue: allLocations) {
            structure.put(locationValue.getId(), locationValue);
        }

        for (LocationValue lv : structure.values()) {
            LocationValue lvParentFromStructure = structure.get(lv.getParentId());
            lv.setParentLocationValue(lvParentFromStructure);
        }

        return structure;


    }

    private void synchronizeLocationValues(LocationValue parentLocationValue, List<LocationValue> locationValues, Map<Long, LocationValue> structuredByIds) {
        log.info("Start synchronization for parent : "+parentLocationValue.getId()+"=>"+parentLocationValue.getLocationValue()+"="+parentLocationValue.getLocationType());
        if(!CollectionUtils.isEmpty(locationValues)) {


            for (LocationValue savedLocationValue : locationValues) {

                LocationValue foundLocationValue;
                if(StringUtils.isNotEmpty(savedLocationValue.getExternalId())) {
                    foundLocationValue = locationRepository.findFirstByExternalId(savedLocationValue.getExternalId());
                } else {
                    foundLocationValue = locationRepository.findFirstByLocationValueAndAndLocationTypeAndParentId(savedLocationValue.getLocationValue(), savedLocationValue.getLocationType(), parentLocationValue.getId());
                }
                if (foundLocationValue == null) {
                    LocationValue newLocationValue = locationRepository.save(savedLocationValue);
                    log.info("Created new location : " + newLocationValue.getId() + "=>" + newLocationValue.getLocationValue() + "=" + newLocationValue.getLocationType().name());
                } else {
                    updateLocationParentHierarchyIfNeeded(structuredByIds, savedLocationValue, foundLocationValue);
                }
            }
        }
        parentLocationValue.setLocationStatus(LocationStatus.OK);
        locationRepository.save(parentLocationValue);

    }

    private void updateLocationParentHierarchyIfNeeded(Map<Long, LocationValue> structuredByIds, LocationValue savedLocationValue, LocationValue foundLocationValue) {
        LocationValue checkParentPriorityValueForFound = structuredByIds.get(foundLocationValue.getParentId());
        LocationValue checkParentPriorityValueForSaved = savedLocationValue.getParentLocationValue();
        if(checkParentPriorityValueForFound == null) {
            throw new B2WInternalException("Can't find parent by id : ["+foundLocationValue.getParentId()+"]");
        }
        if(checkParentPriorityValueForSaved == null) {
            throw new B2WInternalException("Can't find parent by id : ["+checkParentPriorityValueForSaved.getParentId()+"]");
        }

        LocationType parentLocationTypeForFound = checkParentPriorityValueForFound.getLocationType();
        LocationType parentLocationTypeForToSave = checkParentPriorityValueForSaved.getLocationType();
        if(parentLocationTypeForToSave.getHierarchy() - parentLocationTypeForFound.getHierarchy() >0) {
            log.info("Changed parent type for found location : Found location : "+PastsUtils.toLog(checkParentPriorityValueForFound)+"; Current location to save : "+PastsUtils.toLog(checkParentPriorityValueForSaved));
            switchParentInfo(checkParentPriorityValueForFound,checkParentPriorityValueForSaved);
            locationRepository.save(checkParentPriorityValueForFound);
        } else if(parentLocationTypeForFound.getHierarchy() - parentLocationTypeForToSave.getHierarchy() >0) {
            log.info("Changed parent type for saved location : Found location : "+PastsUtils.toLog(checkParentPriorityValueForFound)+"; Current location to save : "+PastsUtils.toLog(checkParentPriorityValueForSaved));
            switchParentInfo(checkParentPriorityValueForSaved, checkParentPriorityValueForFound);
            locationRepository.save(checkParentPriorityValueForSaved);
        }
    }


    private void switchParentInfo(LocationValue toSwitch, LocationValue fromParentInfo) {
        toSwitch.setParentId(fromParentInfo.getParentId());
        toSwitch.setParentLocationValue(fromParentInfo);
        toSwitch.setLocationType(fromParentInfo.getLocationType());
    }

}
