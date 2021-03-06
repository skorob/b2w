package com.b2wplatform.boot.service.user.repo;


import com.b2wplatform.model.auth.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface UserRepository  extends JpaRepository<AppUser, Long> {

        AppUser findByLogin(String userLogin);

}
