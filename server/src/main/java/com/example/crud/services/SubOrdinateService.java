package com.example.crud.services;

import com.example.crud.models.*;
import com.example.crud.models.HelperObjects.*;
import com.example.crud.repositories.IncidentsRepository;
import com.example.crud.repositories.OrganizationRepository;
import com.example.crud.repositories.OrganizationUsersRepository;
import com.example.crud.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubOrdinateService {

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    OrganizationUsersRepository organizationUsersRepository;

    @Autowired
    OrganizationRepository organizationRepository;

    @Autowired
    IncidentsRepository incidentsRepository;

    @Autowired
    CSVService csvService;


    public ResponseEntity<?> createOrgSubOrdinateUser(OrganizationUsersModel orgUserObj) {
        OrganizationUsersModel temp = organizationUsersRepository.findByEmail(orgUserObj.getEmail());
        ResponseObject res = new ResponseObject();
        if (temp != null) {
            res.setMessage("Sub-Ordinate Already Exists!");
            return ResponseEntity.ok(res);
        } else {
            BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
            orgUserObj.setPassword(passwordEncoder.encode(orgUserObj.getPassword()));
            organizationUsersRepository.save(orgUserObj);
            res.setMessage("Sub-Ordinate Created Successfully");
            return ResponseEntity.ok(res);
        }
    }

    public ResponseEntity<?> createSingleUser(UserModel user) {
        usersRepository.save(user);
        ResponseObject res = new ResponseObject();
        res.setMessage("User created successfully");
        return ResponseEntity.ok(res);
    }

    public ResponseEntity<?> addIncident(AddIncident incidentObj) {
        List<OrganizationUsersModel> temp = organizationUsersRepository.findAll();
        OrganizationUsersModel subOrdinate = null;
        for (int i = 0; i < temp.size(); i++) {
            if (temp.get(i).getId().equals(incidentObj.getSubordinateId())) {
                subOrdinate = temp.get(i);
                break;
            }
        }
        ResponseObject res = new ResponseObject();
        if (subOrdinate == null || !subOrdinate.getRole().equals("admin")) {
            res.setMessage("No Authorization for this operation");
            return ResponseEntity.ok(res);
        }
        OrganizationModel org = organizationRepository.findById(subOrdinate.getOrgId()).orElse(null);
        if (org == null) {
            res.setMessage("Error");
            ResponseEntity.ok("res");
        } else {
            List<String> t=org.getIncidentTypes();
            List<String> newList=new ArrayList<>();
            for(String i:incidentObj.getIncidentTypeName()){
                if(!t.contains(i)){
                    newList.add(i);
                }
            }
            org.addIncidentType(newList);
            organizationRepository.save(org);
            res.setMessage("Incident Added Successfully");
            return ResponseEntity.ok(res);
        }
        return ResponseEntity.ok(res);
    }


    public ResponseEntity<?> reportIncident(IncidentModel incidentObj) {
        incidentsRepository.save(incidentObj);
        ResponseObject res=new ResponseObject();
        res.setMessage("Reported Incident Successfully");
        return ResponseEntity.ok(res);
    }

    public ResponseEntity<?> changeIncidentStatus(ChangeIncidentStatus handlerObj) {
        List<IncidentModel> temp1 = incidentsRepository.findAll();
        IncidentModel temp = null;
        for (int i = 0; i < temp1.size(); i++) {
            System.out.println(temp1.get(i).getId() + " " + handlerObj.getIncidentId());
            if (temp1.get(i).getId().equals(handlerObj.getIncidentId())) {
                temp = temp1.get(i);
                break;
            }
        }
        ResponseObject res=new ResponseObject();
        if (temp == null) {
            res.setMessage("Error");
            return ResponseEntity.ok(res);
        }
        temp.addHandler(handlerObj.getHandler());
        temp.setStatus(handlerObj.getHandler().getStatus());
        incidentsRepository.save(temp);
        res.setMessage("Added Handler Successfully");
        return ResponseEntity.ok(res);
    }

    public ResponseEntity<?> getAllIncidents() {
        return ResponseEntity.ok(incidentsRepository.findAll());
    }

    public ResponseEntity<?> login(SubOrdinateLoginModel loginObj) {
        OrganizationUsersModel temp = organizationUsersRepository.findByEmail(loginObj.getEmail());
        System.out.println(temp);
        LoginResponseModel responseObj = new LoginResponseModel();
        BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
        if (temp == null) {
            responseObj.setMessage("Wrong Email");
            return ResponseEntity.ok(responseObj);
        } else if (passwordEncoder.matches(loginObj.getPassword(),temp.getPassword())) {
            responseObj.setMessage("Login Success");
            responseObj.setResponseObj(temp);
            return ResponseEntity.ok(responseObj);
        } else {
            responseObj.setMessage("Wrong Password");
            return ResponseEntity.ok(responseObj);
        }
    }


    public ResponseEntity<?> getAllSubOrdinates(String orgId) {
        ResponseObject res = new ResponseObject();
        res.setMessage("Sub-Ordinates Found Successfully");
        res.setPayload(organizationUsersRepository.findAllByOrgId(orgId));
        return ResponseEntity.ok(res);
    }

    public ResponseEntity<?> getAllUsers(String orgId) {
        ResponseObject res = new ResponseObject();
        res.setMessage("Users Found Successfully");
        res.setPayload(usersRepository.findAllByOrgId(orgId));
        return ResponseEntity.ok(res);
    }


    public ResponseEntity<?> addMultiupleUsers(MutlipleUsersModel users) {
        ResponseObject res = new ResponseObject();
        usersRepository.saveAll(users.getUsers());
        res.setMessage("Users Added Successfully");
        return ResponseEntity.ok(res);
    }

    public ResponseEntity<?> getIncidentTypes(String orgId){
        OrganizationModel org=organizationRepository.findById(orgId).get();
        ResponseObject res=new ResponseObject();
        if(org==null){
            res.setMessage("No Data Found");
            return ResponseEntity.ok(res);
        }
        res.setMessage("Incident Types Found");
        res.setPayload(org.getIncidentTypes());
        return ResponseEntity.ok(res);
    }


    public ResponseEntity<?> getAllIncidentsData(String orgId){
        ResponseObject res=new ResponseObject();
        List<IncidentModel> temp=incidentsRepository.findByOrgId(orgId);
        res.setMessage("Incidents Found");
        res.setPayload(temp);
        return ResponseEntity.ok(res);
    }

    public ResponseEntity<?> getAllIncidentsById(String id){
        List<IncidentModel> incidents=incidentsRepository.findAll();
        List<IncidentModel> temp;
        temp = new ArrayList<>();
        for(IncidentModel i: incidents){
            for(Handler h:i.getHandlers()){
                if(h!=null&&h.getSubOrdinateId().equals(id)){
                    temp.add(i);
                    break;
                }
            }
        }
        ResponseObject res=new ResponseObject();
        res.setMessage("Incidents Data Found");
        res.setPayload(temp);
        return ResponseEntity.ok(res);
    }
}
