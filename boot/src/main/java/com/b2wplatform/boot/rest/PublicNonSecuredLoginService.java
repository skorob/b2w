package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.service.UserService;
import com.b2wplatform.model.ApplicationUser;
import com.b2wplatform.model.UserCredentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/api/auth")
public class PublicNonSecuredLoginService {

    @Autowired
    private UserService userService;

    @GetMapping("/credentials")
    public UserCredentials getCredentials() {
        UserCredentials userCredentials = new UserCredentials();
        userCredentials.setPassword("fsdfsadfsda");
        userCredentials.setLogin("dfdfdfd");
        return userCredentials;
    }

    @PostMapping("/sign-up")
    public void signUp(@RequestBody ApplicationUser user) {
        userService.signupUser(user);
    }


}
