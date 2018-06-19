package com.b2wplatform.boot.service;


import com.b2wplatform.model.ApplicationUser;

public interface UserService {

    void signupUser(ApplicationUser user);
    ApplicationUser loadApplicationUserByUserLogin(String userLogin);
}
