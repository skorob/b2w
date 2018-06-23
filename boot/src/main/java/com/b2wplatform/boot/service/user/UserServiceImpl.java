package com.b2wplatform.boot.service.user;


import com.b2wplatform.boot.service.businessprofile.BusinessProfileReporsitory;
import com.b2wplatform.boot.service.user.repo.UserBusinessPartnerRepository;
import com.b2wplatform.boot.service.user.repo.UserRepository;
import com.b2wplatform.core.exception.B2WException;
import com.b2wplatform.core.exception.B2WValidationException;
import com.b2wplatform.model.auth.AppUser;
import com.b2wplatform.model.partner.AppUserBusinessPartner;
import enums.UserStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BusinessProfileReporsitory businessProfileReporsitory;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UserBusinessPartnerRepository userBusinessPartnerRepository;


    @Override
    public UserDetails loadUserByUsername(String userLogin) throws UsernameNotFoundException {

        String login = userLogin.toLowerCase();
        AppUser appUser = userRepository.findByLogin(login);
        if (appUser == null) {
            throw new B2WException(new UsernameNotFoundException(login));
        }

        if(appUser.getUserStatus() == UserStatus.NEW) {
            throw new B2WException("User is not activated !!!");
        }
        return new User(appUser.getLogin(), appUser.getSecuredPassword(), emptyList());
    }


    public AppUser loadApplicationUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        return userRepository.findByLogin(currentPrincipalName);
    }

    @Override
    public void saveUserBusinessParther(AppUserBusinessPartner appUserBusinessPartner) {
        this.userBusinessPartnerRepository.save(appUserBusinessPartner);
    }


    public void signupUser(AppUser user) {
        String login = user.getLogin().toLowerCase();
        user.setLogin(login);
        user.setUserStatus(UserStatus.VERIFIED);
        AppUser byLogin = userRepository.findByLogin(user.getLogin());

        if(byLogin!=null) {
            throw new B2WValidationException("userAlreadyExists","","login");
        }

        user.setSecuredPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }


}
