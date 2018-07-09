package com.b2wplatform.model.client;

import com.b2wplatform.model.FixedAddress;
import com.b2wplatform.model.PlatformEntity;
import com.b2wplatform.model.partner.AppUserBusinessPartner;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "B2W_CLIENT_LOCATION")
public class ClientLocation extends PlatformEntity {


    @Embedded
    private FixedAddress fixedAddress;


    @ManyToOne(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER, targetEntity = Client.class )
    private Client client;


    public FixedAddress getFixedAddress() {
        return fixedAddress;
    }

    public void setFixedAddress(FixedAddress fixedAddress) {
        this.fixedAddress = fixedAddress;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
