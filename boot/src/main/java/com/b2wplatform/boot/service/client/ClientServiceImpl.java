package com.b2wplatform.boot.service.client;

import com.b2wplatform.model.client.Client;
import com.b2wplatform.model.client.ClientLocation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientServiceImpl implements ClientService {


    @Autowired
    private ClientReporsitory clientReporsitory;

    @Autowired
    private ClientLocationReporsitory clientLocationReporsitory;

    @Override
    public void saveClientWithLocation(Client client, ClientLocation clientLocation) {
        Client savedClient = clientReporsitory.save(client);
        clientLocation.setClient(savedClient);
        clientLocationReporsitory.save(clientLocation);
    }
}
