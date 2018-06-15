package com.b2wplatform.model;


import enums.UserStatus;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "APP_USER")
public class ApplicationUser extends UserCredentials {

    @Enumerated(EnumType.STRING)
    private UserStatus userStatus;

    @Transient
    private List<UserBusinessPartnerRole> businessPartners;


    public UserStatus getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(UserStatus userStatus) {
        this.userStatus = userStatus;
    }
}
