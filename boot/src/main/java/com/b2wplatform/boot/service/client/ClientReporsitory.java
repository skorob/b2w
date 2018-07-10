package com.b2wplatform.boot.service.client;


import com.b2wplatform.model.client.Client;
import com.b2wplatform.model.partner.local.LocalBusinessPartner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClientReporsitory extends JpaRepository<Client, Long> {

    @Query("SELECT cl FROM Client cl WHERE cl.businessPartner.id = :businessPartnerId")
    List<LocalBusinessPartner> findBusinessPartnersClientsByBusinessProfile(@Param("businessPartnerId") Long businessPartnerId);

}
