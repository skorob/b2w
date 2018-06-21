package com.b2wplatform.model.auth;


import com.b2wplatform.model.profile.BusinessPartner;
import com.fasterxml.jackson.annotation.JsonBackReference;
import enums.UserRole;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "B2W_USER_BUSINESS_PARTNER", uniqueConstraints = {@UniqueConstraint(columnNames = {
        "fk_app_user_id",
        "fk_business_partner_id"})})

public class AppUserBusinessPartner implements Serializable{

    @EmbeddedId
    private AppUserBusinessPartnerId appUserBusinessPartnerId = new AppUserBusinessPartnerId();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="fk_business_partner_id",referencedColumnName = "id")
    @MapsId("id")
    private BusinessPartner businessPartner;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="fk_app_user_id",referencedColumnName = "id")
    @MapsId("id")
    @JsonBackReference
    private AppUser appUser;


    public BusinessPartner getBusinessPartner() {
        return businessPartner;
    }

    public void setBusinessPartner(BusinessPartner businessPartner) {
        this.appUserBusinessPartnerId.setBusinessPartnerId(businessPartner.getId());
        this.businessPartner = businessPartner;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUserBusinessPartnerId.setAppUserId(appUser.getId());
        this.appUser = appUser;
    }

}
