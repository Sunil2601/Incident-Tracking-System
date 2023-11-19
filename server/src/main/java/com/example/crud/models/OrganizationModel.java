package com.example.crud.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Document(collection = "Organization")
public class OrganizationModel {
    @MongoId(targetType = FieldType.OBJECT_ID)
    private String id;
    private  String name;
    private String description;

    public List<String> getIncidentTypes() {
        return incidentTypes;
    }

    public void setIncidentTypes(List<String> incidentTypes) {
        this.incidentTypes = incidentTypes;
    }

    private List<String> incidentTypes;
    public String getId() {
        return id;
    }

    public void addIncidentType(List<String> incidentTypeNames){
        incidentTypes.addAll(incidentTypeNames);
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
