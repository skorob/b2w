package com.b2wplatform.boot.tools;

import com.b2wplatform.model.partner.BusinessPartner;
import com.b2wplatform.model.profile.DistributorBusinessProfile;
import com.b2wplatform.model.profile.LogisticBusinessProfile;
import enums.BusinessProfileStatus;
import enums.BusinessProfileType;
import org.apache.commons.lang3.ArrayUtils;

public final class BusinessPartnerTool {

    public static void activateDistibutorProfile(boolean activate, BusinessPartner businessPartner) {

        if(activate) {
            if(businessPartner.getDistributorProfile()==null) {
                DistributorBusinessProfile newDistributorProfile = new DistributorBusinessProfile();
                newDistributorProfile.setStatus(BusinessProfileStatus.ACTIVE);
                businessPartner.setDistributorProfile(newDistributorProfile);
            } else {
                businessPartner.getDistributorProfile().setStatus(BusinessProfileStatus.ACTIVE);
            }
        } else {
            if(businessPartner.getDistributorProfile() !=null) {
                businessPartner.getDistributorProfile().setStatus(BusinessProfileStatus.DISABLED);
            }
        }

    }


    public static void activateLogisticProfile(boolean activate, BusinessPartner updatedBusinessPartner) {
        if(activate) {
            if(updatedBusinessPartner.getLogisticProfile()==null) {
                LogisticBusinessProfile newLogisticProfile = new LogisticBusinessProfile();
                newLogisticProfile.setStatus(BusinessProfileStatus.ACTIVE);
                updatedBusinessPartner.setLogisticProfile(newLogisticProfile);
            } else {
                updatedBusinessPartner.getLogisticProfile().setStatus(BusinessProfileStatus.ACTIVE);
            }
        } else {
            if(updatedBusinessPartner.getLogisticProfile() !=null) {
                updatedBusinessPartner.getLogisticProfile().setStatus(BusinessProfileStatus.DISABLED);
            }
        }
    }

}
