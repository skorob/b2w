package com.b2wplatform.core.exception;


public class B2WException extends RuntimeException {

    public B2WException() {
    }

    public B2WException(String message) {
        super(message);
    }

    public B2WException(String message, Throwable cause) {
        super(message, cause);
    }

    public B2WException(Throwable cause) {
        super(cause);
    }


}
