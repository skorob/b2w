package com.b2wplatform.model.auth;


import enums.BusinessProfileType;

public class ActivationConfig {

    private String businessProfileName;

    private Long businessPartnerId;

    private BusinessProfileType[] businessProfileTypes;

    public BusinessProfileType[] getBusinessProfileTypes() {
        return businessProfileTypes;
    }

    public void setBusinessProfileTypes(BusinessProfileType... businessProfileTypes) {
        this.businessProfileTypes = businessProfileTypes;
    }

    public String getBusinessProfileName() {
        return businessProfileName;
    }

    public void setBusinessProfileName(String businessProfileName) {
        this.businessProfileName = businessProfileName;
    }

    public Long getBusinessPartnerId() { return businessPartnerId;  }

    public void setBusinessPartnerId(Long businessPartnerId) {
        this.businessPartnerId = businessPartnerId;
    }
}
