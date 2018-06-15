package com.b2wplatform.model;


import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.Transient;



@MappedSuperclass
public class UserCredentials  extends PlatformEntity {


    @Column(name = "login",unique = true, nullable = false, length = 25)
    private String login;

    @Transient
    private String password;

    @Column(name = "secured_password",unique = false, nullable = false, length = 100)
    private String securedPassword;


    public String getSecuredPassword() {
        return securedPassword;
    }

    public void setSecuredPassword(String securedPassword) {
        this.securedPassword = securedPassword;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
