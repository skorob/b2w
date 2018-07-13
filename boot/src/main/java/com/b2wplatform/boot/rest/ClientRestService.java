package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.rest.wrapper.ClientLocationWrapper;
import com.b2wplatform.boot.service.client.ClientService;
import com.b2wplatform.model.client.Client;
import com.b2wplatform.model.client.ClientLocation;
import com.b2wplatform.model.partner.BusinessPartner;
import com.b2wplatform.model.partner.local.LocalBusinessPartner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping(path="/api/client")
public class ClientRestService {

    @Autowired
    private ClientService clientService;

    @PostMapping("/save")
    public ClientLocation save(@RequestBody ClientLocationWrapper clientLocationWrapper) {
        BusinessPartner businessPartner = new BusinessPartner();
        businessPartner.setId(clientLocationWrapper.businessPartnerId);

        clientLocationWrapper.client.setBusinessPartner(businessPartner);
        return clientService.saveClientWithLocation(clientLocationWrapper.client, clientLocationWrapper.clientLocation);
    }


    @GetMapping("/find-all-for-business-partner/{id}/{searchString}")
    public List<Client> findBusinessPartnerClientsByBusinessProfile(@PathVariable("id") Long businessPartnerId, @PathVariable("searchString") String searchName) {
        return this.clientService.findBusinessPartnerClientsByBusinessProfile(businessPartnerId, searchName);
    }


    @GetMapping("/remove/{id}")
    public void remove(@PathVariable("id") Long clientId) {
        clientService.removeClientById(clientId);
    }

}
