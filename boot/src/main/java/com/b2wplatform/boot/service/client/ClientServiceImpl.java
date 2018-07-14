package com.b2wplatform.boot.service.client;

import com.b2wplatform.model.client.Client;
import com.b2wplatform.model.client.ClientLocation;
import com.b2wplatform.model.partner.local.LocalBusinessPartner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Consumer;

@Service
public class ClientServiceImpl implements ClientService {


    @Autowired
    private ClientReporsitory clientReporsitory;

    @Autowired
    private ClientLocationReporsitory clientLocationReporsitory;

    @Override
    public ClientLocation saveClientWithLocation(Client client, ClientLocation clientLocation) {
        Client savedClient = clientReporsitory.save(client);
        clientLocation.setClient(savedClient);
        return clientLocationReporsitory.save(clientLocation);
    }

    @Override
    public List<Client> findBusinessPartnerClientsByBusinessProfile(Long businessPartnerId, String searchName) {
        return clientReporsitory.findBusinessPartnerClientsByBusinessProfile(businessPartnerId, searchName);
    }

    @Override
    public void removeClientById(Long clientId) {
        this.clientReporsitory.deleteById(clientId);
    }

    @Override
    public void removeClientLocationById(Long clientLocationId) {
        this.clientLocationReporsitory.deleteById(clientLocationId);
    }

    @Override
    public Client findById(Long clientId) {
        return this.clientReporsitory.findById(clientId).orElse(null);
    }


}
