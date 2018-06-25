package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.service.businesspartner.BusinessPartnerService;
import com.b2wplatform.model.partner.BusinessPartner;
import com.b2wplatform.model.partner.MyBusinessPartner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping(path="/api/business-partner")
public class BusinessPartnerRestService {

    @Autowired
    private BusinessPartnerService businessPartnerService;


    @GetMapping("/all")
    public List<BusinessPartner> allBusinessPartners() {
        return businessPartnerService.getAllBusinessPartners();
    }

    @PostMapping("/assign-my-business-partner")
    public void assignMyBusinessPartner(@RequestBody MyBusinessPartner myBusinessPartner) {
        businessPartnerService.assignMyBusinessPartner(myBusinessPartner);
    }


    @RequestMapping("/find-my-business-partners/{id}")
    public List<MyBusinessPartner> findMyBusinessPartners(@PathVariable("id") Long currentBusinessPartner) {

        return businessPartnerService.findMyBusinessPartners(currentBusinessPartner);
    }

    @PostMapping("/remove-my-business-partner")
    public void removeMyBusinessPartner(@RequestBody MyBusinessPartner myBusinessPartner) {
        businessPartnerService.removeMyBusinessPartner(myBusinessPartner);
    }


}
