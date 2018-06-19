package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.service.UserServiceImpl;
import com.b2wplatform.model.ApplicationUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/api/auth")
public class PublicNonSecuredLoginService {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/sign-up")
    public void signUp(@RequestBody ApplicationUser user) {
        userService.signupUser(user);
    }


}
