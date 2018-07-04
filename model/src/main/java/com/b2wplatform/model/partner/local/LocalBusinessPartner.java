package com.b2wplatform.model.partner.local;


import com.b2wplatform.model.PlatformEntity;
import com.b2wplatform.model.partner.BusinessPartner;

import javax.persistence.*;

@Entity
@Table(name = "B2W_LOCAL_BUSINESS_PARTNER")
public class LocalBusinessPartner extends PlatformEntity {

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @Column(name = "is_logistic")
    private boolean isLogisticPartner;

    @Column(name = "is_distributor")
    private boolean isDistributorPartner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="fk_business_partner_id", referencedColumnName = "id")
    private BusinessPartner businessPartner;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isLogisticPartner() {
        return isLogisticPartner;
    }

    public void setLogisticPartner(boolean logisticPartner) {
        isLogisticPartner = logisticPartner;
    }

    public boolean isDistributorPartner() {
        return isDistributorPartner;
    }

    public void setDistributorPartner(boolean distributorPartner) {
        isDistributorPartner = distributorPartner;
    }

    public BusinessPartner getBusinessPartner() {
        return businessPartner;
    }

    public void setBusinessPartner(BusinessPartner businessPartner) {
        this.businessPartner = businessPartner;
    }
}
