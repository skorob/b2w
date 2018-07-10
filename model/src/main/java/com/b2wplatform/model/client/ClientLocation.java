package com.b2wplatform.model.client;

import com.b2wplatform.model.FixedAddress;
import com.b2wplatform.model.PlatformEntity;
import com.b2wplatform.model.partner.AppUserBusinessPartner;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "B2W_CLIENT_LOCATION")
public class ClientLocation extends FixedAddress {


    @ManyToOne(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER, targetEntity = Client.class, optional = false)
    @JoinColumn(name="fk_client_id", referencedColumnName = "id", nullable = false)
    private Client client;


    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
