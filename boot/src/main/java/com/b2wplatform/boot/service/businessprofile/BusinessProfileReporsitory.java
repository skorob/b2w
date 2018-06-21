package com.b2wplatform.boot.service.businessprofile;


import com.b2wplatform.model.profile.BusinessProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessProfileReporsitory extends JpaRepository<BusinessProfile,Long> {

}
