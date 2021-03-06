package com.b2wplatform.model.client;

import com.b2wplatform.model.PlatformEntity;
import com.b2wplatform.model.partner.BusinessPartner;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "B2W_CLIENT")
public class Client extends PlatformEntity {

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @OneToMany(cascade = {CascadeType.REFRESH, CascadeType.REMOVE},fetch = FetchType.LAZY, targetEntity = ClientLocation.class, mappedBy = "client" )
    private List<ClientLocation> clientLocations;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="fk_client_business_partner_id", referencedColumnName = "id", nullable = false)
    @JsonIgnore
    private BusinessPartner businessPartner;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BusinessPartner getBusinessPartner() {
        return businessPartner;
    }

    public void setBusinessPartner(BusinessPartner businessPartner) {
        this.businessPartner = businessPartner;
    }

    public List<ClientLocation> getClientLocations() {
        return clientLocations;
    }

    public void setClientLocations(List<ClientLocation> clientLocations) {
        this.clientLocations = clientLocations;
    }
}
