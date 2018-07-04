package com.b2wplatform.boot.service.localbusinesspartner;

import com.b2wplatform.model.partner.local.LocalBusinessPartner;

import java.util.List;

public interface LocalBusinessPartnerService {

    List<LocalBusinessPartner> findLocalBusinessPartnersByBusinessProfile(Long businessProfile);

    LocalBusinessPartner save(LocalBusinessPartner localBusinessPartner);
}
