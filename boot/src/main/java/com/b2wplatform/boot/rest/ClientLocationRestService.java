package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.rest.wrapper.ClientLocationWrapper;
import com.b2wplatform.boot.service.client.ClientService;
import com.b2wplatform.model.client.Client;
import com.b2wplatform.model.client.ClientLocation;
import com.b2wplatform.model.partner.BusinessPartner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping(path="/api/client-location")
public class ClientLocationRestService {

    @Autowired
    private ClientService clientService;


    @GetMapping("/remove/{id}")
    public void remove(@PathVariable("id") Long clientId) {
        clientService.removeClientLocationById(clientId);
    }

}
