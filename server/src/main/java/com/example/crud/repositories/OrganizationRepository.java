package com.example.crud.repositories;

import com.example.crud.models.OrganizationModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrganizationRepository extends MongoRepository<OrganizationModel,String> {
    OrganizationModel findByName(String name);
}
