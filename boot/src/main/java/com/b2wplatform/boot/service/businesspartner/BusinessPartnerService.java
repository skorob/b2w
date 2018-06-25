package com.b2wplatform.boot.service.businesspartner;

import com.b2wplatform.model.auth.ActivationConfig;
import com.b2wplatform.model.partner.BusinessPartner;
import com.b2wplatform.model.partner.MyBusinessPartner;

import java.util.List;

public interface BusinessPartnerService {

    void activateUserProfilesForUser(ActivationConfig activationConfig);

    List<BusinessPartner> getAllBusinessPartners();

    void assignMyBusinessPartner(MyBusinessPartner myBusinessPartner);

    List<MyBusinessPartner> findMyBusinessPartners(Long currentBusinesPartner);

    void removeMyBusinessPartner(MyBusinessPartner myBusinessPartner);
}
