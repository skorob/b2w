package com.b2wplatform.boot.service.businessprofile;


import com.b2wplatform.boot.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusinessProfileServiceImpl implements BusinessProfileService {



    @Autowired
    private UserService userService;



}
