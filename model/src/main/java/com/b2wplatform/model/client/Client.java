package com.b2wplatform.model.client;

import com.b2wplatform.model.PlatformEntity;
import com.b2wplatform.model.partner.AppUserBusinessPartner;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "B2W_CLIENT")
public class Client extends PlatformEntity {

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @OneToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER, targetEntity = ClientLocation.class, mappedBy = "client" )
    private List<ClientLocation> clientLocations;


}
