package com.example.crud.models.HelperObjects;

import com.example.crud.models.UserModel;

import java.util.List;

public class MutlipleUsersModel {
    public List<UserModel> getUsers() {
        return users;
    }

    public void setUsers(List<UserModel> users) {
        this.users = users;
    }

    private List<UserModel> users;
}
