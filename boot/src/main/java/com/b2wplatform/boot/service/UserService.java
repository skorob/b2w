package com.b2wplatform.boot.service;


import com.b2wplatform.boot.repo.UserRepository;
import com.b2wplatform.model.ApplicationUser;
import enums.UserStatus;
import com.b2wplatform.core.exception.B2WException;
import com.b2wplatform.core.exception.B2WValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        String login = userName.toLowerCase();
        ApplicationUser applicationUser = userRepository.findByLogin(login);
        if (applicationUser == null) {
            throw new B2WException(new UsernameNotFoundException(login));
        }

        if(applicationUser.getUserStatus() == UserStatus.NEW) {
            throw new B2WException("User is not activated !!!");
        }

        return new User(applicationUser.getLogin(), applicationUser.getSecuredPassword(), emptyList());
    }

    public void signupUser(ApplicationUser user) {
        String login = user.getLogin().toLowerCase();
        ApplicationUser byLogin = userRepository.findByLogin(login);

        if(byLogin!=null) {
            throw new B2WValidationException("userAlreadyExists","","login");
        }

        user.setLogin(login);
        user.setSecuredPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

}
