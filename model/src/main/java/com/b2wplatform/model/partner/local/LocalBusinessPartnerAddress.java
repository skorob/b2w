package com.b2wplatform.model.partner.local;


import com.b2wplatform.model.FixedAddress;
import com.b2wplatform.model.PlatformEntity;
import com.b2wplatform.model.partner.BusinessPartner;

import javax.persistence.*;

@Entity
@Table(name = "B2W_LOCAL_BP_ADDRESS_TEMP")
public class LocalBusinessPartnerAddress extends FixedAddress {


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="fk_loc_bp_id", referencedColumnName = "id")
    private  LocalBusinessPartner localBusinessPartner;



}
