package com.example.crud.controllers;

import com.example.crud.models.TempModel;
import com.example.crud.repositories.TempRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.List;

@RestController
@RequestMapping("/temp")
public class TempController {

    @Autowired
    TempRepository tempRepo;

    @GetMapping("/get")
    public List<TempModel> get(){
        return tempRepo.findAll();
    }

    @PostMapping("/create")
    public ResponseEntity<?>create(@RequestBody TempModel tempObj){
        tempRepo.save(tempObj);
        return ResponseEntity.ok(tempObj);
    }
}
