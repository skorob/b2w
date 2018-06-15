package com.b2wplatform.boot.repo;


import com.b2wplatform.model.ApplicationUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface UserRepository  extends JpaRepository<ApplicationUser, Long> {

        ApplicationUser findByLogin(String userLogin);

}
