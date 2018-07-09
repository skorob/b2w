package com.b2wplatform.boot.service.client;

import com.b2wplatform.model.client.Client;
import com.b2wplatform.model.client.ClientLocation;

public interface ClientService {

    void saveClientWithLocation(Client client, ClientLocation clientLocation);

}
