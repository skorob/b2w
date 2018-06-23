package com.b2wplatform.boot.service.user.repo;


import com.b2wplatform.model.partner.AppUserBusinessPartner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface UserBusinessPartnerRepository extends JpaRepository<AppUserBusinessPartner, Long> {



}
