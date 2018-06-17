package com.b2wplatform.boot.rest;


import com.b2wplatform.model.UserCredentials;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class SecuredLoginService {


    @GetMapping("/api/login")
    public UserCredentials getCredentials() {
        UserCredentials userCredentials = new UserCredentials();
        userCredentials.setPassword("OK");
        userCredentials.setLogin("OK");
        return userCredentials;
    }

}
