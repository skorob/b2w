package com.b2wplatform.model.auth;


import enums.BusinessProfileType;

public class ActivationConfig {

    private String name="[NAME]";

    private BusinessProfileType[] businessProfileTypes;

    public BusinessProfileType[] getBusinessProfileTypes() {
        return businessProfileTypes;
    }

    public void setBusinessProfileTypes(BusinessProfileType... businessProfileTypes) {
        this.businessProfileTypes = businessProfileTypes;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
