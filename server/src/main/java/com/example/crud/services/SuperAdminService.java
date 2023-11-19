package com.example.crud.services;

import com.example.crud.models.HelperObjects.AddOrganizationResponse;
import com.example.crud.models.HelperObjects.LoginResponseModel;
import com.example.crud.models.HelperObjects.ResponseObject;
import com.example.crud.models.IncidentModel;
import com.example.crud.models.OrganizationModel;
import com.example.crud.models.OrganizationUsersModel;
import com.example.crud.models.SuperAdminModel;
import com.example.crud.repositories.IncidentsRepository;
import com.example.crud.repositories.OrganizationRepository;
import com.example.crud.repositories.OrganizationUsersRepository;
import com.example.crud.repositories.SuperAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuperAdminService {

    @Autowired
    SuperAdminRepository superAdminRepo;

    @Autowired
    OrganizationRepository organizationRepository;

    @Autowired
    OrganizationUsersRepository organizationUsersRepository;

    @Autowired
    IncidentsRepository incidentsRepository;

    public ResponseEntity<?> login(SuperAdminModel adminDetails){
        SuperAdminModel DBAdminDetails =superAdminRepo.findByEmail(adminDetails.getEmail());

        LoginResponseModel loginResponseObj=new LoginResponseModel();
        loginResponseObj.setResponseObj(DBAdminDetails);
        if(DBAdminDetails==null){
            loginResponseObj.setMessage("Wrong Email");
            return ResponseEntity.ok(loginResponseObj);
        }
        if(DBAdminDetails.getPassword().equals(adminDetails.getPassword())){
            loginResponseObj.setMessage("Login Success");
            return ResponseEntity.ok(loginResponseObj);
        }
        loginResponseObj.setMessage("Wrong Password");
        return ResponseEntity.ok(loginResponseObj);
    }

    public  ResponseEntity<?> createOrganization(OrganizationModel orgObj){
        OrganizationModel temp= organizationRepository.findByName(orgObj.getName());
        AddOrganizationResponse res=new AddOrganizationResponse();
        if(temp!=null){
            res.setMessage("organization already exists");
            return ResponseEntity.ok(res);
        }
        organizationRepository.save(orgObj);
        res.setMessage("Organization created successfully");
        return ResponseEntity.ok(res);
    }
    public  ResponseEntity<?> deleteOrganization(String orgId){
        OrganizationModel temp= organizationRepository.findById(orgId).orElse(null);
        if(temp==null){
            return ResponseEntity.ok("organization not exists");
        }
        organizationRepository.delete(temp);
        return ResponseEntity.ok("Organization delete successfully");
    }

    public ResponseEntity<?> getAllOrganizations(){
        return ResponseEntity.ok(organizationRepository.findAll());
    }

    public ResponseEntity<?> createOrganizationAdmin(OrganizationUsersModel orgAdminObj){
        OrganizationUsersModel temp= organizationUsersRepository.findByEmail(orgAdminObj.getEmail());
        AddOrganizationResponse res=new AddOrganizationResponse();
        if(temp==null){
            BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
            String encodedPassword=passwordEncoder.encode(orgAdminObj.getPassword());
            orgAdminObj.setPassword(encodedPassword);
            System.out.println(orgAdminObj.getPassword());
            organizationUsersRepository.save(orgAdminObj);
            res.setMessage("Organization User created successfully");
            return ResponseEntity.ok(res);
        }
        else{
            res.setMessage("Organization User Already Exists");
            return ResponseEntity.ok(res);
        }
    }
    public ResponseEntity<?> getOrganizationUsers(String orgId){
        List<OrganizationUsersModel> temp=organizationUsersRepository.findAllByOrgId(orgId);
        return ResponseEntity.ok(temp);
    }

    public ResponseEntity<?> getAllIncidents(){
        ResponseObject res=new ResponseObject();
        List<IncidentModel> incidentsList=incidentsRepository.findAll();
        res.setMessage("Incidents Found");
        res.setPayload(incidentsList);
        return ResponseEntity.ok(res);
    }
}
