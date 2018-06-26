package com.b2wplatform.model.partner;


import com.b2wplatform.model.PlatformEntity;
import com.b2wplatform.model.profile.DistributorBusinessProfile;
import com.b2wplatform.model.profile.LogisticBusinessProfile;

import javax.persistence.*;

@Entity
@Table(name = "B2W_BUSINESS_PARTNER")
public class BusinessPartner extends PlatformEntity {

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "business_profile_id")
    private LogisticBusinessProfile logisticProfile;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "distribution_profile_id")
    private DistributorBusinessProfile distributorProfile;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LogisticBusinessProfile getLogisticProfile() {
        return logisticProfile;
    }

    public void setLogisticProfile(LogisticBusinessProfile logisticProfile) {
        this.logisticProfile = logisticProfile;
    }

    public DistributorBusinessProfile getDistributorProfile() {
        return distributorProfile;
    }

    public void setDistributorProfile(DistributorBusinessProfile distributorProfile) {
        this.distributorProfile = distributorProfile;
    }
}
