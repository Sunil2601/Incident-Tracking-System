package com.example.crud.repositories;

import com.example.crud.models.OrganizationUsersModel;
import com.example.crud.models.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UsersRepository extends MongoRepository<UserModel,String> {
    List<UserModel> findAllByOrgId(String OrgId);
}
