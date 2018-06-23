package com.b2wplatform.model.partner;


import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class MyBusinessPartnerId implements Serializable {

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="fk_business_partner_id",referencedColumnName = "id")
    @MapsId("id")
    private BusinessPartner businessPartner;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="fk_my_business_partner_id",referencedColumnName = "id")
    @MapsId("id")
    private BusinessPartner myBusinessPartner;

    public BusinessPartner getBusinessPartner() {
        return businessPartner;
    }

    public void setBusinessPartner(BusinessPartner businessPartner) {
        this.businessPartner = businessPartner;
    }

    public BusinessPartner getMyBusinessPartner() {
        return myBusinessPartner;
    }

    public void setMyBusinessPartner(BusinessPartner myBusinessPartner) {
        this.myBusinessPartner = myBusinessPartner;
    }

}
