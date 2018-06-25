package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.service.businesspartner.BusinessPartnerService;
import com.b2wplatform.model.auth.ActivationConfig;
import com.b2wplatform.model.partner.BusinessPartner;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/all")
    public List<BusinessPartner> allBusinessPartners() {
        return businessPartnerService.getAllBusinessPartners();
    }
}
