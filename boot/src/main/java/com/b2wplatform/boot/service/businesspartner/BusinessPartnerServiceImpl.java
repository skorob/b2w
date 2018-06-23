package com.b2wplatform.boot.service.businesspartner;


import com.b2wplatform.boot.service.user.UserService;
import com.b2wplatform.core.api.APIErrorCodes;
import com.b2wplatform.core.exception.B2WValidationException;
import com.b2wplatform.model.auth.ActivationConfig;
import com.b2wplatform.model.auth.AppUser;
import com.b2wplatform.model.partner.AppUserBusinessPartner;
import com.b2wplatform.model.partner.BusinessPartner;
import com.b2wplatform.model.profile.DistributorBusinessProfile;
import com.b2wplatform.model.profile.LogisticBusinessProfile;
import enums.BusinessProfileType;
import enums.UserRole;
import io.jsonwebtoken.lang.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusinessPartnerServiceImpl implements BusinessPartnerService {

    @Autowired
    private BusinessPartnerRepository businessPartnerRepository;

    @Autowired
    private UserService userService;


    public void activateUserProfilesForUser(ActivationConfig activationConfig) {
        AppUser appUser = userService.loadApplicationUser();
        if(Collections.isEmpty(appUser.getBusinessPartners())) {
            AppUserBusinessPartner appUserBusinessPartner = new AppUserBusinessPartner();
            appUserBusinessPartner.setAppUser(appUser);
            appUserBusinessPartner.setRole(UserRole.OWNER);
            appUserBusinessPartner.setBusinessPartner(createBusinessPartner(activationConfig));
            userService.saveUserBusinessParther(appUserBusinessPartner);
        }
    }

    private BusinessPartner createBusinessPartner(ActivationConfig activationConfig) {
        BusinessProfileType[] businessProfileTypes = activationConfig.getBusinessProfileTypes();
        if((businessProfileTypes==null)) {
            throw new B2WValidationException(APIErrorCodes.INVALID_ACTIVATION_DATA, "The business profile types are not defined", "businessProfileTypes");
        }

        BusinessPartner businessPartner = new BusinessPartner();

        businessPartner.setName(activationConfig.getName());

        for(BusinessProfileType businessProfileType : businessProfileTypes) {
            if(businessProfileType.equals(BusinessProfileType.DISTRIBUTION)) {
                businessPartner.setDistributorProfile(new DistributorBusinessProfile());
            }

            if(businessProfileType.equals(BusinessProfileType.LOGISTIC)) {
                businessPartner.setLogisticProfile(new LogisticBusinessProfile());
            }
        }

        return   businessPartnerRepository.save(businessPartner);
    }
}
