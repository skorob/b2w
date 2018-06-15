package com.b2wplatform.boot.app;


public class SecurityConstants {

        public static final String SECRET = "b2w_security_key";
        public static final long EXPIRATION_TIME = 864_000_000; // 10 days
        public static final String TOKEN_PREFIX = "Bearer ";
        public static final String HEADER_STRING = "Auth-Token";
        public static final String SIGN_UP_URL = "/";


}
