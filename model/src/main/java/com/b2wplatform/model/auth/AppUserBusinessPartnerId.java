package com.b2wplatform.model.auth;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;


@Embeddable
public class AppUserBusinessPartnerId implements Serializable {

    @Column(name="fk_app_user_id")
    private Long appUserId;


    @Column(name="fk_business_partner_id")
    private Long businessPartnerId;


    public Long getAppUserId() {
        return appUserId;
    }

    public void setAppUserId(Long appUserId) {
        this.appUserId = appUserId;
    }

    public Long getBusinessPartnerId() {
        return businessPartnerId;
    }

    public void setBusinessPartnerId(Long businessPartnerId) {
        this.businessPartnerId = businessPartnerId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AppUserBusinessPartnerId that = (AppUserBusinessPartnerId) o;

        if (appUserId != null ? !appUserId.equals(that.appUserId) : that.appUserId != null)
            return false;
        return businessPartnerId != null ? businessPartnerId.equals(that.businessPartnerId) : that.businessPartnerId == null;

    }

    @Override
    public int hashCode() {
        int result = appUserId != null ? appUserId.hashCode() : 0;
        result = 31 * result + (businessPartnerId != null ? businessPartnerId.hashCode() : 0);
        return result;
    }
}
