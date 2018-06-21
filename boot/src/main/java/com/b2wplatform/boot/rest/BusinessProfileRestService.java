package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.service.businesspartner.BusinessPartnerService;
import com.b2wplatform.model.auth.ActivationConfig;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping(path="/api/profile")
public class BusinessProfileRestService {

    @Autowired
    private BusinessPartnerService businessPartnerService;

    @PostMapping("/activate")
    @JsonBackReference
    public void activateLoginWithProfiles(@RequestBody ActivationConfig activationConfig) {
        businessPartnerService.activateUserProfilesForUser(activationConfig);
    }

}
