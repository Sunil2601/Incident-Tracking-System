package com.example.crud.models;

import java.util.List;

public class AddIncident {
    private String subordinateId;
    private List<String> incidentTypeName;

    public String getSubordinateId() {
        return subordinateId;
    }

    public void setSubordinateId(String subordinateId) {
        this.subordinateId = subordinateId;
    }

    public List<String> getIncidentTypeName() {
        return incidentTypeName;
    }

    public void setIncidentTypeName(List<String> incidentTypeName) {
        this.incidentTypeName = incidentTypeName;
    }
}
