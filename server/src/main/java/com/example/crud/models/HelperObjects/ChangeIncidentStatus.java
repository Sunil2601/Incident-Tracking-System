package com.example.crud.models.HelperObjects;

import com.example.crud.models.Handler;

public class ChangeIncidentStatus {

    private String incidentId;
    private Handler handler;

    public String getIncidentId() {
        return incidentId;
    }

    public void setIncidentId(String incidentId) {
        this.incidentId = incidentId;
    }

    public Handler getHandler() {
        return handler;
    }

    public void setHandler(Handler handler) {
        this.handler = handler;
    }
}
