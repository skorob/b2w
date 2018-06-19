package com.b2wplatform.model;


import enums.UserStatus;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "B2W_APP_USER")
public class ApplicationUser extends UserCredentials {

    @Enumerated(EnumType.STRING)
    @Column(name = "user_status", nullable = false)
    private UserStatus userStatus = UserStatus.ACTIVE;

    @OneToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER, targetEntity = UserBusinessPartner.class, mappedBy = "applicationUser" )
    private List<UserBusinessPartner> businessPartners;

    public UserStatus getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(UserStatus userStatus) {
        this.userStatus = userStatus;
    }
}
