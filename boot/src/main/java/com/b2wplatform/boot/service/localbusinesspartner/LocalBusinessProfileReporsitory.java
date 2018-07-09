package com.b2wplatform.boot.service.localbusinesspartner;


import com.b2wplatform.model.partner.local.LocalBusinessPartner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LocalBusinessProfileReporsitory extends JpaRepository<LocalBusinessPartner, Long> {

    @Query("SELECT lbp FROM LocalBusinessPartner lbp WHERE lbp.businessPartner.id = :businessPartnerId")
    List<LocalBusinessPartner> findLocalBusinessPartnersByBusinessProfile(@Param("businessPartnerId") Long businessPartnerId);
}
