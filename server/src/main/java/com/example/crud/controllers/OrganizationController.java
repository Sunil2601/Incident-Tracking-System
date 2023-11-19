package com.example.crud.controllers;

import com.example.crud.services.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/organization")
@CrossOrigin(origins = "http://localhost:4200")
public class OrganizationController {

    @Autowired
    OrganizationService organizationService;



    @GetMapping("/getOrganizationDetails/{orgId}")
    public ResponseEntity<?> getOrganizationDetails(@PathVariable String orgId){
        return this.organizationService.getOrgDetails(orgId);
    }
}
