package com.b2wplatform.boot.service.user;


import com.b2wplatform.model.auth.AppUser;
import com.b2wplatform.model.auth.AppUserBusinessPartner;

public interface UserService {

    void signupUser(AppUser user);
    AppUser loadApplicationUser();
    void saveUserBusinessParther(AppUserBusinessPartner appUserBusinessPartner);
}
