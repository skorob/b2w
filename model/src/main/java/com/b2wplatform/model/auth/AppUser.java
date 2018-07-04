package com.b2wplatform.model.auth;


import com.b2wplatform.model.partner.AppUserBusinessPartner;
import enums.UserStatus;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "B2W_APP_USER")
public class AppUser extends UserCredentials {

    @Enumerated(EnumType.STRING)
    @Column(name = "user_status", nullable = false)
    private UserStatus userStatus = UserStatus.ACTIVE;

    @OneToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER, targetEntity = AppUserBusinessPartner.class, mappedBy = "appUser" )
    private List<AppUserBusinessPartner> businessPartners;

    public UserStatus getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(UserStatus userStatus) {
        this.userStatus = userStatus;
    }

    public List<AppUserBusinessPartner> getBusinessPartners() {
        return businessPartners;
    }


}
