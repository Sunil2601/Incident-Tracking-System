package com.example.crud.models;

import java.util.List;

public class OrganizationSummary {

    private String name;
    private String adminEmail;
    private int noOfOrgUsers;
    private List<OrganizationUsersModel> orgSubOrdinates;

    private List<UserModel> orgUsers;

    private List<IncidentModel> incidents;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdminEmail() {
        return adminEmail;
    }

    public void setAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
    }

    public int getNoOfOrgUsers() {
        return noOfOrgUsers;
    }

    public void setNoOfOrgUsers(int noOfOrgUsers) {
        this.noOfOrgUsers = noOfOrgUsers;
    }

    public List<OrganizationUsersModel> getOrgSubOrdinates() {
        return orgSubOrdinates;
    }

    public void setOrgSubOrdinates(List<OrganizationUsersModel> orgSubOrdinates) {
        this.orgSubOrdinates = orgSubOrdinates;
    }

    public List<UserModel> getOrgUsers() {
        return orgUsers;
    }

    public void setOrgUsers(List<UserModel> orgUsers) {
        this.orgUsers = orgUsers;
    }

    public List<IncidentModel> getIncidents() {
        return incidents;
    }

    public void setIncidents(List<IncidentModel> incidents) {
        this.incidents = incidents;
    }
}
