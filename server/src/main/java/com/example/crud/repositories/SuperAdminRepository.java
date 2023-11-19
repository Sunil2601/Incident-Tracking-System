package com.example.crud.repositories;

import com.example.crud.models.SuperAdminModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SuperAdminRepository extends MongoRepository<SuperAdminModel,String> {
    SuperAdminModel findByEmail(String email);
}
