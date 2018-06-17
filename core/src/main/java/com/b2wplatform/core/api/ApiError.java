package com.b2wplatform.core.api;


import org.springframework.http.HttpStatus;

public class APIError {

    private String errorCode;
    private String errorMessage;
    private String fieldName;
    private HttpStatus status;

    public APIError(HttpStatus status, String errorCode, String errorMessage, String fieldName) {
        this.status = status;
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.fieldName = fieldName;
    }

    public String getErrorCode() {
        return errorCode;
    }


    public String getErrorMessage() {
        return errorMessage;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public String getFieldName() { return fieldName; }
}
