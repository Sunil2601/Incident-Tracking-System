package com.example.crud.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "Users")
public class UserModel {
    @MongoId(targetType = FieldType.OBJECT_ID)
    private String Id;
    private String name;
    private String email;
    private int age;
    private String orgId;
    private String phoneNumber;

    public UserModel(String name, String email, String phoneNumber, int age, String orgId) {
        this.name=name;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.age=age;
        this.orgId=orgId;
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getOrgId() {
        return orgId;
    }

    public void setOrgId(String orgId) {
        this.orgId = orgId;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
