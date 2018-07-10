package com.b2wplatform.boot.service.client;

        import com.b2wplatform.model.client.Client;
        import com.b2wplatform.model.client.ClientLocation;
        import java.util.List;

public interface ClientService {

    ClientLocation saveClientWithLocation(Client client, ClientLocation clientLocation);

    List<Client> findBusinessPartnerClientsByBusinessProfile(Long businessPartnerId);

}
