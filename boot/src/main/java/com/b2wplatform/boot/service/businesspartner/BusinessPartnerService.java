package com.b2wplatform.boot.service.businesspartner;

import com.b2wplatform.model.auth.ActivationConfig;

public interface BusinessPartnerService {

    void activateUserProfilesForUser(ActivationConfig activationConfig);
}
