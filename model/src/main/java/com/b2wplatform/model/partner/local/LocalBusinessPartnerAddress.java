package com.b2wplatform.model.partner.local;


import com.b2wplatform.model.FixedAddress;
import com.b2wplatform.model.PlatformEntity;
import com.b2wplatform.model.partner.BusinessPartner;

import javax.persistence.*;

@Entity
@Table(name = "B2W_LOCAL_BP_ADDRESS")
public class LocalBusinessPartnerAddress extends PlatformEntity {


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="fk_loc_bp_id", referencedColumnName = "id")
    private  LocalBusinessPartner localBusinessPartner;

    @Embedded
    private FixedAddress fixedAddress;


}
