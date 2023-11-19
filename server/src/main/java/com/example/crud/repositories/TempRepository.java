package com.example.crud.repositories;

import com.example.crud.models.TempModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TempRepository extends MongoRepository<TempModel,String> {

}
