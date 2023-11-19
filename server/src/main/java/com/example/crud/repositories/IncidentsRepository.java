package com.example.crud.repositories;

import com.example.crud.models.IncidentModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface IncidentsRepository extends MongoRepository<IncidentModel,String> {
List<IncidentModel> findByOrgId(String id);
}
