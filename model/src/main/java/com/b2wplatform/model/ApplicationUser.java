package com.b2wplatform.model;


import javax.persistence.*;
import java.util.List;



@Entity
@Table(name= "APP_USERS")
public class ApplicationUser extends UserCredentials {

    @Transient
    private List<UserBusinessPartnerRole> businessPartners;

}
