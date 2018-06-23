package com.b2wplatform.boot.service.businesspartner;


import com.b2wplatform.model.partner.BusinessPartner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessPartnerRepository extends JpaRepository<BusinessPartner,Long>  {
}
