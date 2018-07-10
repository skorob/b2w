package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.rest.wrapper.ClientLocationWrapper;
import com.b2wplatform.boot.service.client.ClientService;
import com.b2wplatform.model.partner.BusinessPartner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping(path="/api/client")
public class ClientRestService {

    @Autowired
    private ClientService clientService;

    @PostMapping("/save")
    public void save(@RequestBody ClientLocationWrapper clientLocationWrapper) {
        BusinessPartner businessPartner = new BusinessPartner();
        businessPartner.setId(clientLocationWrapper.businessPartnerId);

        clientLocationWrapper.client.setBusinessPartner(businessPartner);
        clientService.saveClientWithLocation(clientLocationWrapper.client, clientLocationWrapper.clientLocation);
    }



}
