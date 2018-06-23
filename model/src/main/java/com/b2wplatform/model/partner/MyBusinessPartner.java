package com.b2wplatform.model.partner;


import enums.MyBusinessProfileRelation;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "B2W_MY_BUSINESS_PARTNER", uniqueConstraints = {@UniqueConstraint(columnNames = {
        "fk_business_partner_id",
        "fk_my_business_partner_id"})})
public class MyBusinessPartner  implements Serializable {

    @EmbeddedId
    private MyBusinessPartnerId myBusinessPartnerId = new MyBusinessPartnerId();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="fk_business_partner_id",referencedColumnName = "id")
    @MapsId("id")
    private BusinessPartner businessPartner;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="fk_my_business_partner_id",referencedColumnName = "id")
    @MapsId("id")
    private BusinessPartner myBusinessPartner;

    @Column(name="relation_status", nullable = false)
    @Enumerated(EnumType.STRING)
    private MyBusinessProfileRelation relationStatus;


    public BusinessPartner getBusinessPartner() {
        return businessPartner;
    }

    public void setBusinessPartner(BusinessPartner businessPartner) {
        this.myBusinessPartnerId.setBusinessPartner(businessPartner);
        this.businessPartner = businessPartner;
    }

    public BusinessPartner getMyBusinessPartner() {
        return myBusinessPartner;
    }

    public void setMyBusinessPartner(BusinessPartner myBusinessPartner) {
        this.myBusinessPartnerId.setMyBusinessPartner(myBusinessPartner);
        this.myBusinessPartner = myBusinessPartner;
    }

    public MyBusinessProfileRelation getRelationStatus() {
        return relationStatus;
    }

    public void setRelationStatus(MyBusinessProfileRelation relationStatus) {
        this.relationStatus = relationStatus;
    }
}
