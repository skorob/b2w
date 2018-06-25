package com.b2wplatform.boot.service.businesspartner;


import com.b2wplatform.model.partner.BusinessPartner;
import com.b2wplatform.model.partner.MyBusinessPartner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BusinessPartnerRepository extends JpaRepository<BusinessPartner,Long>  {


}
