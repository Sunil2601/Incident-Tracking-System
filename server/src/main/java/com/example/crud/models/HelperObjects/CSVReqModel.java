package com.example.crud.models.HelperObjects;

import org.springframework.web.multipart.MultipartFile;

public class CSVReqModel {
    private String orgId;
    private MultipartFile file;

    public String getOrgId() {
        return orgId;
    }

    public void setOrgId(String orgId) {
        this.orgId = orgId;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }
}
