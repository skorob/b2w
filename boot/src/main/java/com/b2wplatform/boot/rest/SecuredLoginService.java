package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.service.user.UserService;
import com.b2wplatform.model.auth.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping(path="/api/app-user")
public class SecuredLoginService {

    @Autowired
    private UserService userService;

    @GetMapping("/get")
    public AppUser getAppUser() {
        return userService.loadApplicationUser();
    }


}
