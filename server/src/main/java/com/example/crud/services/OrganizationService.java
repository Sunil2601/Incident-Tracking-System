package com.example.crud.services;

import com.example.crud.models.*;
import com.example.crud.models.HelperObjects.ResponseObject;
import com.example.crud.repositories.IncidentsRepository;
import com.example.crud.repositories.OrganizationRepository;
import com.example.crud.repositories.OrganizationUsersRepository;
import com.example.crud.repositories.UsersRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizationService {

    @Autowired
    OrganizationRepository organizationRepository;

    @Autowired
    IncidentsRepository incidentsRepository;

    @Autowired
    OrganizationUsersRepository organizationUsersRepository;

    @Autowired
    UsersRepository usersRepository;

    public ResponseEntity<?> getOrgDetails(String orgId){
        OrganizationModel temp=organizationRepository.findById(orgId).get();
        List<OrganizationUsersModel> orgSubordinates=organizationUsersRepository.findAllByOrgId(orgId);
        List<UserModel> orgUsers=usersRepository.findAllByOrgId(orgId);
        List<IncidentModel> orgIncidents=incidentsRepository.findByOrgId(orgId);
        String adminEmail="";
        for(OrganizationUsersModel t:orgSubordinates){
            if(t.getRole().equals("admin")){
                adminEmail=t.getEmail();
                break;
            }
        }
        OrganizationSummary orgObj=new OrganizationSummary();
        orgObj.setName(temp.getName());
        orgObj.setAdminEmail(adminEmail);
        orgObj.setOrgSubOrdinates(orgSubordinates);
        orgObj.setOrgUsers(orgUsers);
        orgObj.setIncidents(orgIncidents);
        ResponseObject res=new ResponseObject();
        res.setMessage("Organization Details Found");
        res.setPayload(orgObj);
        return ResponseEntity.ok(res);
    }
}
