import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubOrdinate } from '../models/SubOrdinateModel';
import { LoginService } from './login.service';
import { OrganizationUser } from '../models/OrganizationUserModel';

@Injectable({
  providedIn: 'root'
})
export class OrganizationAdminService {

  apiReqStatus: boolean = true;
  organizationSubordinatesData: OrganizationUser[] = [];
  organizationUsersData: any;
  organizationIncidentTypes:any=[];


  constructor(private http: HttpClient, private loginService: LoginService) { }


  getApiReqStatus(): boolean {
    return this.apiReqStatus;
  }


  addSubOrdinate(subOrdinateObj: SubOrdinate): void {
    let apiURL = "http://localhost:8080/subOrdinate/createSubOrdinate";
    let postObj = {
      ...subOrdinateObj,
      orgId: this.loginService.getLoginOrganizationAdminOrgId(),
      role: "subordinate"
    }
    this.apiReqStatus = false;
    this.http.post(apiURL, postObj).subscribe(
      (response: any) => {
        if (response.message == "Sub-Ordinate Already Exists!") {
          alert("Sub-Ordinate Already Exists")
        }
        else if (response.message == "Sub-Ordinate Created Successfully") {
          alert("Sub-Ordinate Created Successfully");
        }
        else {
          alert("Something Went Wrong");
        }
        this.apiReqStatus = true;
      },
      (error) => {
        console.log(error)
        this.apiReqStatus = true;

      }
    )
  }

  /**
   * A function to add incident types of an organization
   * @param incidentTypes the types of incidents of the organizationA 
   */
  addIncidentType(incidentTypes: String[]): void {
    let apiURL = "http://localhost:8080/subOrdinate/addIncidentTypes";
    this.apiReqStatus = false;
    let postObj = {
      subordinateId: this.loginService.getLoginOrganizationAdminId(),
      incidentTypeName: incidentTypes
    }
    this.http.post(apiURL, postObj).subscribe(
      (response: any) => {
        if (response.message == "No Authorization for this operation") {
          alert("You Don't Have Necessary Permissions")
        }
        else if (response.message == "Incident Added Successfully") {
          alert("Incident Types Created Successfully");
        }
        else {
          alert("Something Went Wrong");
        }
        this.apiReqStatus = true;
      },
      (error) => {
        console.log(error)
        this.apiReqStatus = true;
      }
    )
  }

  getAllSubOrdinatesDataFromApi() {
    let apiURL = "http://localhost:8080/subOrdinate/getAllSubOrdinates/" + this.loginService.getLoginOrganizationAdminOrgId();
    this.http.get(apiURL).subscribe(
      (response: any) => {
        if (response.message == "Sub-Ordinates Found Successfully") {
          console.log(response,"in service")
          this.organizationSubordinatesData = response.payload;
        }
        else {
          alert("Something Went Wrong");
        }
        this.apiReqStatus = true;
      },
      (error) => {
        console.log(error)
        this.apiReqStatus = true;
      }
    )
  }

  getOrganizationSubOrdinatesData(): OrganizationUser[] {
    return this.organizationSubordinatesData;
  }

  getAllOrganzationUsersDataFromApi() {
    let apiURL = "http://localhost:8080/subOrdinate/getAllUsers/" + this.loginService.getLoginOrganizationAdminOrgId();
    this.http.get(apiURL).subscribe(
      (response: any) => {
        if (response.message == "Users Found Successfully") {
          this.organizationUsersData = response.payload;
        }
        else {
          alert("Something Went Wrong");
        }
        this.apiReqStatus = true;
      },
      (error) => {
        console.log(error)
        this.apiReqStatus = true;
      }
    )
  }
  
  getAllOrganzationUsersData():any[]{
    return this.organizationUsersData;
  }


  
}

