package com.example.crud.models.HelperObjects;

public class LoginResponseModel {
    private String message;
    private Object responseObj;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getResponseObj() {
        return responseObj;
    }

    public void setResponseObj(Object responseObj) {
        this.responseObj = responseObj;
    }
}
