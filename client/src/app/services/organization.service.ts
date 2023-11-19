import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService{

  orgObj:any;
  orgId:String=""

  constructor(private http:HttpClient,private loginService:LoginService,private route:ActivatedRoute) { }

  setOrgObj(orgObj:any){
    this.orgObj=orgObj;
  }
  getOrgObj(){
    return this.orgObj;
  }

  setOrgId(orgId:String){
    this.orgId=orgId
  }

  getOrgSummaryApi(){
    let apiURL="http://localhost:8080/organization/getOrganizationDetails/"+this.orgId;
    return this.http.get(apiURL);
  }

}
