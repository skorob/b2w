package lv.b2wplatform.core.exception;


public class B2WInternalException extends B2WException{

    public B2WInternalException() {
    }

    public B2WInternalException(String message) {
        super(message);
    }

    public B2WInternalException(String message, Throwable cause) {
        super(message, cause);
    }

    public B2WInternalException(Throwable cause) {
        super(cause);
    }
}
