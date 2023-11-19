package com.example.crud.controllers;

import com.example.crud.models.OrganizationModel;
import com.example.crud.models.OrganizationUsersModel;
import com.example.crud.models.SuperAdminModel;
import com.example.crud.repositories.SuperAdminRepository;
import com.example.crud.services.SuperAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/superAdmin")
@CrossOrigin(origins = "http://localhost:4200")
public class SuperAdminController {

    @Autowired
    private SuperAdminService superAdminService;

    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody SuperAdminModel adminDetails){
        return superAdminService.login(adminDetails);
    }

    @PostMapping("/createOrganization")
    public ResponseEntity<?> createOrganization(@RequestBody OrganizationModel orgObj){
        return superAdminService.createOrganization(orgObj);
    }

    @DeleteMapping("/deleteOrganization/{orgId}")
    public ResponseEntity<?> deleteOrganization(@PathVariable String orgId){
        return superAdminService.deleteOrganization(orgId);
    }

    @GetMapping("/getAllOrganizations")
    public ResponseEntity<?> getAllOrg(){
        return superAdminService.getAllOrganizations();
    }

    @GetMapping("/getAllIncidents")
    public ResponseEntity<?> getAllIncidents(){
        return superAdminService.getAllIncidents();
    }

    @PostMapping("/createOrganizationUser")
    public ResponseEntity<?> createOrgUser(@RequestBody OrganizationUsersModel orgUserObj){
        return superAdminService.createOrganizationAdmin(orgUserObj);
    }

    @GetMapping("/getOrganizationUser/{orgId}")
    public ResponseEntity<?> getOrgUsers(@PathVariable String orgId){
        return superAdminService.getOrganizationUsers(orgId);
    }


}
