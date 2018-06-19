package com.b2wplatform.model;


import enums.UserRole;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "B2W_USER_BUSINESS_PARTNER")
public class UserBusinessPartner implements Serializable{


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="fk_business_partner_id",referencedColumnName = "id")
    @EmbeddedId
    private BusinessPartner businessPartner;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="fk_app_user_id",referencedColumnName = "id")
    @EmbeddedId
    private ApplicationUser applicationUser;


    public BusinessPartner getBusinessPartner() {
        return businessPartner;
    }

    public void setBusinessPartner(BusinessPartner businessPartner) {
        this.businessPartner = businessPartner;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public ApplicationUser getApplicationUser() {
        return applicationUser;
    }

    public void setApplicationUser(ApplicationUser applicationUser) {
        this.applicationUser = applicationUser;
    }
}
