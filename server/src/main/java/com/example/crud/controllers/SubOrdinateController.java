package com.example.crud.controllers;

import com.example.crud.models.AddIncident;
import com.example.crud.models.HelperObjects.CSVReqModel;
import com.example.crud.models.HelperObjects.ChangeIncidentStatus;
import com.example.crud.models.HelperObjects.SubOrdinateLoginModel;
import com.example.crud.models.IncidentModel;
import com.example.crud.models.OrganizationUsersModel;
import com.example.crud.models.UserModel;
import com.example.crud.services.SubOrdinateService;
import com.example.crud.services.SuperAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.example.crud.models.HelperObjects.MutlipleUsersModel;
@RestController
@RequestMapping("/subOrdinate")
@CrossOrigin(origins = "http://localhost:4200")
public class SubOrdinateController {

    @Autowired
    SubOrdinateService subOrdinateService;

    @PostMapping("/createSubOrdinate")
    public ResponseEntity<?> createSubOrdinate(@RequestBody OrganizationUsersModel orgUserObj){
        return subOrdinateService.createOrgSubOrdinateUser(orgUserObj);
    }

    @PostMapping("/createSingleUser")
    public ResponseEntity<?> createUser(@RequestBody UserModel user){
        return subOrdinateService.createSingleUser(user);
    }

    @PostMapping("/addIncidentTypes")
    public ResponseEntity<?> addIncident(@RequestBody AddIncident incidentTypes){
        return subOrdinateService.addIncident(incidentTypes);
    }

    @PostMapping("/reportIncident")
    public ResponseEntity<?> reportIncident(@RequestBody IncidentModel incidentObj){
        System.out.println(incidentObj.getStatus());
        return subOrdinateService.reportIncident(incidentObj);
    }

    @PostMapping("/changeIncidentStatus")
    public ResponseEntity<?> changeStatus(@RequestBody ChangeIncidentStatus changeStatusObj){
        return subOrdinateService.changeIncidentStatus(changeStatusObj);
    }

    @GetMapping("/getAllIncidents")
    public ResponseEntity<?> getAllIncidents(){
        return subOrdinateService.getAllIncidents();
    }

    @PostMapping("/loginSubOrdinate")
    public ResponseEntity<?> loginSubOrd(@RequestBody SubOrdinateLoginModel loginObj){
        return subOrdinateService.login(loginObj);
    }

    @GetMapping("/getAllSubOrdinates/{orgId}")
    public ResponseEntity<?> getAllSubOrdinates(@PathVariable String orgId){
        return subOrdinateService.getAllSubOrdinates(orgId);
    }
    @GetMapping("/getAllUsers/{orgId}")
    public ResponseEntity<?> getAllUsers(@PathVariable String orgId){
        return subOrdinateService.getAllUsers(orgId);
    }
    @GetMapping("/getAllIncidents/{orgId}")
    public ResponseEntity<?> getAllIncidents(@PathVariable String orgId){
        return subOrdinateService.getAllIncidentsData(orgId);
    }

    @PostMapping("/addMultipleUser")
    public ResponseEntity<?> addMultipleUsers(@RequestBody MutlipleUsersModel users){
        System.out.println(users.getUsers());
        return this.subOrdinateService.addMultiupleUsers(users);
    }

    @GetMapping("/getIncidentTypes/{orgId}")
    public ResponseEntity<?> getIncidentTypes(@PathVariable String orgId){
        System.out.println(orgId);
        return subOrdinateService.getIncidentTypes(orgId);
    }

    @GetMapping("/getAllIncidentsBySubOrdId/{subOrdId}")
    public  ResponseEntity<?> getAllIncidentsById(@PathVariable String subOrdId){
        return this.subOrdinateService.getAllIncidentsById(subOrdId);
    }
}
