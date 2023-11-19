package com.example.crud.repositories;

import com.example.crud.models.OrganizationUsersModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OrganizationUsersRepository extends MongoRepository<OrganizationUsersModel,String> {
    OrganizationUsersModel findByEmail(String Email);
    List<OrganizationUsersModel> findAllByOrgId(String OrgId);

}
