package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.rest.wrapper.ClientLocationWrapper;
import com.b2wplatform.boot.service.user.UserServiceImpl;
import com.b2wplatform.model.auth.ActivationConfig;
import com.b2wplatform.model.auth.AppUser;
import com.b2wplatform.model.client.Client;
import com.b2wplatform.model.client.ClientLocation;
import enums.BusinessProfileType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PublicNonSecuredLoginRestService {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping(value = "/api/auth/sign-up")
    public void signUp(@RequestBody AppUser user) {
        userService.signupUser(user);
    }

    @GetMapping("/api/auth/get")
    public ClientLocationWrapper get() {
        ClientLocationWrapper rv = new ClientLocationWrapper();
        rv.client = new Client();
        rv.clientLocation = new ClientLocation();
        return rv;
    }

}
