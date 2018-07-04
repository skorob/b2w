package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.service.businesspartner.BusinessPartnerService;
import com.b2wplatform.boot.service.localbusinesspartner.LocalBusinessPartnerService;
import com.b2wplatform.model.partner.BusinessPartner;
import com.b2wplatform.model.partner.MyBusinessPartner;
import com.b2wplatform.model.partner.local.LocalBusinessPartner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping(path="/api/local-business-partner")
public class LocalBusinessPartnerRestService {

    @Autowired
    private LocalBusinessPartnerService localBusinessPartnerService;


    @GetMapping("/find-all-for-business-partner")
    public List<LocalBusinessPartner> findLocalBusinessPartnersByBusinessProfile(@PathVariable("id") Long businessPartnerId) {
        return localBusinessPartnerService.findLocalBusinessPartnersByBusinessProfile(businessPartnerId);
    }

    @PostMapping("/save")
    public LocalBusinessPartner save(@RequestBody LocalBusinessPartner localBusinessPartner) {
            return localBusinessPartnerService.save(localBusinessPartner);
    }

}
