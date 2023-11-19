package com.example.crud.services;

import com.example.crud.models.UserModel;
import com.example.crud.repositories.UsersRepository;
import com.opencsv.CSVParser;
import com.opencsv.CSVReader;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import org.apache.commons.csv.CSVFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class CSVService {

    @Autowired
    UsersRepository usersRepository;
    public boolean isCSVFormatted(MultipartFile file) {
        String type = "text/csv";
        if(!type.equals(file.getContentType())) return false;
        return true;
    }

    public void processAndStoreCSVData(MultipartFile file) {
        try {
            csvToUser(file.getInputStream());
        }
        catch (Exception ex){
            ex.printStackTrace();

        }
    }

    public void csvToUser(InputStream inputStream) {
        try (
                BufferedReader fileReader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));
        ) {
            CsvToBean csvToBean = new CsvToBeanBuilder(fileReader)
                    .withType(UserModel.class)
                    .withIgnoreLeadingWhiteSpace(true)
                    .build();
            List<UserModel> records = csvToBean.parse();
            for (UserModel user : records) {
                UserModel temp = new UserModel(user.getName(), user.getEmail(), user.getPhoneNumber(), user.getAge(), user.getOrgId());
                usersRepository.save(temp);
            }
        } catch (Exception ex) {
            System.out.println("**%%%$$$");
            ex.printStackTrace();
        }
    }
}
