package com.b2wplatform.boot.service.localbusinesspartner;

import com.b2wplatform.model.partner.local.LocalBusinessPartner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocalBusinessPartnerServiceImpl  implements LocalBusinessPartnerService{

    @Autowired
    private LocalBusinessProfileReporsitory localBusinessProfileReporsitory;

    @Override
    public List<LocalBusinessPartner> findLocalBusinessPartnersByBusinessProfile(Long businessProfile) {
        return localBusinessProfileReporsitory.findLocalBusinessPartnersByBusinessProfile(businessProfile);
    }

    public LocalBusinessPartner save(LocalBusinessPartner localBusinessPartner) {
        return localBusinessProfileReporsitory.save(localBusinessPartner);
    }
}
