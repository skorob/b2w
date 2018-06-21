package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.service.user.UserServiceImpl;
import com.b2wplatform.model.auth.ActivationConfig;
import com.b2wplatform.model.auth.AppUser;
import enums.BusinessProfileType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/api/auth")
public class PublicNonSecuredLoginRestService {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping(value = "/sign-up")
    public void signUp(@RequestBody AppUser user) {
        userService.signupUser(user);
    }

    @GetMapping("/apia")
    public ActivationConfig activateLoginWithProfiles() {
        ActivationConfig ac = new ActivationConfig();
        ac.setBusinessProfileTypes(BusinessProfileType.DISTRIBUTION,BusinessProfileType.DISTRIBUTION);
        return ac;
    }


}
