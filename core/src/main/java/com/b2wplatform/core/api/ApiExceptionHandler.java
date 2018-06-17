package com.b2wplatform.core.api;


import com.b2wplatform.core.exception.B2WValidationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class APIExceptionHandler {

    @ExceptionHandler({ B2WValidationException.class })
    public ResponseEntity<Object> handleConstraintViolation(
            B2WValidationException ex, WebRequest request) {
        APIError apiError = new APIError(HttpStatus.INTERNAL_SERVER_ERROR, ex.getErrorCode(),  ex.getMessage(), ex.getFieldName());
        return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
    }

}
