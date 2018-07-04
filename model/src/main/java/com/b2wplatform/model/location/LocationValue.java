package com.b2wplatform.model.location;

import com.b2wplatform.model.PlatformEntity;
import enums.LocationStatus;
import enums.LocationType;

import javax.persistence.*;

@Entity
@Table(name = "B2W_LOCATION",
        indexes =
                { @Index(name = "idx_location_value", columnList = "location_value"),
                  @Index(name = "idx_zip", columnList = "zip"),
                  @Index(name = "idx_external_id", columnList = "external_id", unique = true)})
public class LocationValue extends PlatformEntity {

    @Column(name="location_value")
    private String locationValue;

    @Column(name="parent_id")
    private Long parentId;


    @Column(name="location_type")
    @Enumerated(EnumType.STRING)
    private LocationType locationType;

    @Column(name="external_id", nullable = true)
    private String externalId;

    @Column(name="zip")
    private String zip;


    @Column(name="location_status")
    @Enumerated(EnumType.STRING)
    private LocationStatus locationStatus;

    @Transient
    private LocationValue parentLocationValue;

    public String getLocationValue() {
        return locationValue;
    }

    public void setLocationValue(String locationValue) {
        this.locationValue = locationValue;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public LocationType getLocationType() {
        return locationType;
    }

    public void setLocationType(LocationType locationType) {
        this.locationType = locationType;
    }

    public String getExternalId() {
        return externalId;
    }

    public void setExternalId(String externalId) {
        this.externalId = externalId;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public LocationStatus getLocationStatus() {
        return locationStatus;
    }

    public void setLocationStatus(LocationStatus locationStatus) {
        this.locationStatus = locationStatus;
    }

    public LocationValue getParentLocationValue() {return parentLocationValue; }

    public void setParentLocationValue(LocationValue parentLocationValue) { this.parentLocationValue = parentLocationValue; }
}
