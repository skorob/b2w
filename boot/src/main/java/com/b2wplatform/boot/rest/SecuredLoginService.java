package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.service.UserService;
import com.b2wplatform.model.ApplicationUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class SecuredLoginService {

    @Autowired
    private UserService userService;

    @GetMapping("/api/getappuser")
    public ApplicationUser getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        return userService.loadApplicationUserByUserLogin(currentPrincipalName);
    }

}
