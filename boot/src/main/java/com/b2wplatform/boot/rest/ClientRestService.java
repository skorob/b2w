package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.rest.wrapper.ClientLocationWrapper;
import com.b2wplatform.boot.service.client.ClientService;
import com.b2wplatform.model.partner.local.LocalBusinessPartner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping(path="/api/client")
public class ClientRestService {

    @Autowired
    private ClientService clientService;

    @PostMapping("/save")
    public void save(@RequestBody ClientLocationWrapper clientLocation) {
        clientService.saveClientWithLocation(clientLocation.client, clientLocation.clientLocation);
    }

}
