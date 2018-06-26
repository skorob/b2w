package com.b2wplatform.model.profile;


import com.b2wplatform.model.PlatformEntity;
import enums.BusinessProfileStatus;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class BusinessProfile  extends PlatformEntity {

    @Enumerated(EnumType.STRING)
    @Column(name="status", nullable = false)
    private BusinessProfileStatus status;

    public BusinessProfileStatus getStatus() {
        return status;
    }

    public void setStatus(BusinessProfileStatus status) {
        this.status = status;
    }
}
