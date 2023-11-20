package com.example.iot.utils;

public class ResponseBase {

    private Object[] results;

    private ResponseType responseType;

    private String errorCode;

    private String message;

    private String errorKey;

    public ResponseBase(Object[] results, ResponseType responseType, String errorCode, String message, String errorKey) {
        this.results = results;
        this.responseType = responseType;
        this.errorCode = errorCode;
        this.message = message;
        this.errorKey = errorKey;
    }

    public ResponseBase(Object[] results, ResponseType responseType, String errorCode, String message) {
        this.results = results;
        this.responseType = responseType;
        this.errorCode = errorCode;
        this.message = message;
    }

    public ResponseBase() {
    }

    public ResponseBase(Object[] results, ResponseType responseType, String message) {
        this.results = results;
        this.responseType = responseType;
        this.message = message;
    }

    public Object[] getResults() {
        return results;
    }

    public void setResults(Object[] results) {
        this.results = results;
    }

    public ResponseType getResponseType() {
        return responseType;
    }

    public void setResponseType(ResponseType responseType) {
        this.responseType = responseType;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getErrorKey() {
        return errorKey;
    }

    public void setErrorKey(String errorKey) {
        this.errorKey = errorKey;
    }
}
