import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Organization } from '../models/organization';
import { HttpClient } from '@angular/common/http';
import { OrganizationUser } from '../models/OrganizationUserModel';
@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  organizationsData: any = [];
  apiRequestStatus: boolean = false;
  incidentsData: any=[];

  constructor(private loginService: LoginService, private http: HttpClient) {
  }

  /**
   * A function to get all details of all organizations from database
   */
  getOrganizationsData(){
    let apiURL = "http://localhost:8080/superAdmin/getAllOrganizations";
    this.apiRequestStatus = false;
    this.http.get(apiURL).subscribe((response) => {
      this.organizationsData = response;
      this.apiRequestStatus = true;
    },
      (error) => {
        alert('Something Went Wrong')
        this.apiRequestStatus = true;
      })
  }

   /**
   * A function to get all details of all Incidents from database
   */
   getIncidentsData(){
    let apiURL = "http://localhost:8080/superAdmin/getAllIncidents";
    this.apiRequestStatus = false;
    this.http.get(apiURL).subscribe((response:any) => {
      this.incidentsData = response.payload;
      this.apiRequestStatus = true;
    },
      (error) => {
        alert('Something Went Wrong')
        this.apiRequestStatus = true;
      })
  }

  /**
   * A function to add a new organization into the database
   * @param orgObj the Organization Object to be added
   */

  addOrganization(orgObj: Organization) {
    if (this.loginService.getLoggedInUserRole() == "superAdmin") {
      this.http.post<any>('http://localhost:8080/superAdmin/createOrganization', orgObj).subscribe((response) => {
        console.log(response)
        if (response.message == "organization already exists") {
          alert("Organization Already Exists!")
        }
        else if (response.message == "Organization created successfully") {
          alert("Organization Added Successfully");
        }
        else {
          alert("Something Went Wrong")
        }
      },
        (error) => {
          console.log(error)
          alert("Something Went Wrong")
        });
    }
    else {
      alert("You Don't Have Necessary Permissions")
    }
  }

  /**
   * 
   * @returns List of strings of all available organizations
   */
  getAllOrganizationsNames(): String[] {
    let temp = []
    for (let i of this.organizationsData) temp.push(i.name);
    return temp;
  }

  /**
   * 
   * @returns A boolean value which tells the status of api request
   */
  getApiRequestStatus(): boolean {
    return this.apiRequestStatus;
  }

/**
 * 
 * @returns A function get all the organizations data list
 */
  getOrganizationsList():Organization[]{
    return this.organizationsData;
  }

  /**
 * 
 * @returns A function get all the organizations data list
 */
  getIncidentsList():Organization[]{
    return this.incidentsData;
  }

  /**
   * A function to add the organization admin into the database
   * @param adminObj the Organization user i.e, admin details
   */
  addOrgnizationAdmin(adminObj: any): void {
    let idx = this.organizationsData.findIndex((ele: { name: any; }) => ele.name == adminObj.organizationName)
    let postObj = {
      name: adminObj.name,
      email: adminObj.email,
      password: adminObj.password,
      orgId: this.organizationsData[idx].id,
      role: "admin"
    }
    this.apiRequestStatus = false;
    this.http.post("http://localhost:8080/superAdmin/createOrganizationUser", postObj).subscribe(
      (response: any) => {
        if (response.message == "Organization User created successfully") {
         
          alert('Admin created successfully')
        }
        else if(response.message=="Organization User Already Exists"){
          alert('Admin Already Exists')
        }
        else{
          alert('Something Went Wrong')
        }
        this.apiRequestStatus = true;
      },
      (error) => {
        this.apiRequestStatus = true;
        alert('Something Went Wrong')
      }
    )

  }



}
