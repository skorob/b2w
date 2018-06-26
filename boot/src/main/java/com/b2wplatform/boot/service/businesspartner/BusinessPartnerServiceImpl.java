package com.b2wplatform.boot.service.businesspartner;


import com.b2wplatform.boot.service.user.UserService;
import com.b2wplatform.core.api.APIErrorCodes;
import com.b2wplatform.core.exception.B2WValidationException;
import com.b2wplatform.model.auth.ActivationConfig;
import com.b2wplatform.model.auth.AppUser;
import com.b2wplatform.model.partner.AppUserBusinessPartner;
import com.b2wplatform.model.partner.BusinessPartner;
import com.b2wplatform.model.partner.MyBusinessPartner;
import com.b2wplatform.model.profile.DistributorBusinessProfile;
import com.b2wplatform.model.profile.LogisticBusinessProfile;
import enums.BusinessProfileStatus;
import enums.BusinessProfileType;
import enums.MyBusinessProfileRelation;
import enums.UserRole;
import io.jsonwebtoken.lang.Collections;
import org.apache.commons.lang3.ArrayUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessPartnerServiceImpl implements BusinessPartnerService {

    @Autowired
    private BusinessPartnerRepository businessPartnerRepository;

    @Autowired
    private MyBusinessPartnerRepository myBusinessPartnerRepository;

    @Autowired
    private UserService userService;


    public void activateUserProfilesForUser(ActivationConfig activationConfig) {
        AppUser appUser = userService.loadApplicationUser();
        AppUserBusinessPartner appUserBusinessPartner = null;
        if(activationConfig.getBusinessPartnerId()==null && Collections.isEmpty(appUser.getBusinessPartners())) {
            appUserBusinessPartner = new AppUserBusinessPartner();
            appUserBusinessPartner.setAppUser(appUser);
            appUserBusinessPartner.setRole(UserRole.OWNER);

        } else if(activationConfig.getBusinessPartnerId()!=null) {
            appUserBusinessPartner = appUser.
                    getBusinessPartners().
                        stream().
                        filter( s-> activationConfig.getBusinessPartnerId().equals(s.getBusinessPartner().getId())).findFirst().
                    orElse(null);

        }

        if(appUserBusinessPartner==null) {
            throw new B2WValidationException(APIErrorCodes.INVALID_ACTIVATION_DATA, "The business profile with id ["+activationConfig.getBusinessPartnerId()+"] not exists");
        }
        appUserBusinessPartner.setBusinessPartner(createOrUpdateBusinessPartner(appUserBusinessPartner.getBusinessPartner(), activationConfig));
        userService.saveUserBusinessParther(appUserBusinessPartner);
    }

    @Override
    public List<BusinessPartner> getAllBusinessPartners() {
        return this.businessPartnerRepository.findAll();
    }

    @Override
    public void assignMyBusinessPartner(MyBusinessPartner myBusinessPartner) {
        myBusinessPartner.setRelationStatus(MyBusinessProfileRelation.NORMAL);
        this.myBusinessPartnerRepository.save(myBusinessPartner);
    }


    private BusinessPartner createOrUpdateBusinessPartner(BusinessPartner businessPartner, ActivationConfig activationConfig) {
        BusinessProfileType[] businessProfileTypes = activationConfig.getBusinessProfileTypes();
        if((businessProfileTypes==null)) {
            throw new B2WValidationException(APIErrorCodes.INVALID_ACTIVATION_DATA, "The business profile types are not defined", "businessProfileTypes");
        }

        BusinessPartner updatedBusinessPartner = activationConfig.getBusinessPartnerId()==null ? new BusinessPartner() : businessPartner;
        updatedBusinessPartner.setName(activationConfig.getBusinessProfileName());


        activatedDeactivateProfiles(businessProfileTypes, updatedBusinessPartner);


        return   businessPartnerRepository.save(updatedBusinessPartner);
    }

    private void activatedDeactivateProfiles(BusinessProfileType[] businessProfileTypes, BusinessPartner updatedBusinessPartner) {
        if(ArrayUtils.contains(businessProfileTypes, BusinessProfileType.DISTRIBUTION)) {
            if(updatedBusinessPartner.getDistributorProfile()==null) {
                DistributorBusinessProfile newDistributorProfile = new DistributorBusinessProfile();
                newDistributorProfile.setStatus(BusinessProfileStatus.ACTIVE);
                updatedBusinessPartner.setDistributorProfile(newDistributorProfile);
            }
        } else {
            if(updatedBusinessPartner.getDistributorProfile() !=null) {
                updatedBusinessPartner.getDistributorProfile().setStatus(BusinessProfileStatus.DISABLED);
            }
        }
        if(ArrayUtils.contains(businessProfileTypes, BusinessProfileType.LOGISTIC)) {
            if(updatedBusinessPartner.getLogisticProfile()==null) {
                LogisticBusinessProfile newLogisticProfile = new LogisticBusinessProfile();
                newLogisticProfile.setStatus(BusinessProfileStatus.ACTIVE);
                updatedBusinessPartner.setLogisticProfile(newLogisticProfile);
            }
        } else {
            if(updatedBusinessPartner.getLogisticProfile() !=null) {
                updatedBusinessPartner.getLogisticProfile().setStatus(BusinessProfileStatus.DISABLED);
            }
        }
    }


    @Override
    public List<MyBusinessPartner> findMyBusinessPartners(Long currentBusinesPartnerId) {
        return this.myBusinessPartnerRepository.findMyBusinessPartners(currentBusinesPartnerId);
    }

    @Override
    public void removeMyBusinessPartner(MyBusinessPartner myBusinessPartner) {
        this.myBusinessPartnerRepository.delete(myBusinessPartner);
    }


}
