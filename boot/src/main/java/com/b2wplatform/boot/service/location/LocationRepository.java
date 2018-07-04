package com.b2wplatform.boot.service.location;

import com.b2wplatform.model.location.LocationValue;
import com.b2wplatform.model.partner.local.LocalBusinessPartner;
import enums.LocationStatus;
import enums.LocationType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigInteger;
import java.util.List;

public interface LocationRepository  extends JpaRepository<LocationValue, Long>
{


    LocationValue findFirstByLocationValue(String locationValue);
    LocationValue findFirstByLocationValueAndAndLocationTypeAndParentId(String locationValue, LocationType locationType, Long parentId);
    LocationValue findFirstByExternalId(String externalId);
    List<LocationValue> findLocationValuesByLocationStatusAndLocationTypeNot(LocationStatus locationStatus, LocationType locationType);




    List<LocationValue> findAllByParentId(Long parentId);
}
