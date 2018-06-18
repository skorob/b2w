package com.b2wplatform.model;


import javax.persistence.*;

@Entity
@Table(name = "B2W_BUSINESS_PARTNER")
public class BusinessPartner extends PlatformEntity{

    @Column(name = "name", nullable = false, length = 25)
    private String name;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "business_profile_id")
    private LogisticBusinessProfile logisticProfile;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "distribution_profile_id")
    private DistributorBusinessProfile distributorProfile;

}
