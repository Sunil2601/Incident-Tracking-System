import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { yearsPerRow } from '@angular/material/datepicker';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  incidentsData: any
  organizationIncidentTypes: any = [];
  currentIncident: any;
  apiReqStatus: boolean = true;
  constructor(private http: HttpClient, private loginService: LoginService) { }


  getApiReqStatus(): boolean {
    return this.apiReqStatus;
  }
  getIncidentTypes() {
    let apiURL = "http://localhost:8080/subOrdinate/getIncidentTypes/" + this.loginService.getLoginOrganizationAdminOrgId();
    this.apiReqStatus = false;
    this.http.get(apiURL).subscribe(
      (response: any) => {
        if (response.message == "Incident Types Found") {
          this.organizationIncidentTypes = response.payload;
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

  getIncidentTypesData(): String[] {
    return this.organizationIncidentTypes;
  }

  reportNewIncident(incidentObj: any) {
    let apiURL = "http://localhost:8080/subOrdinate/reportIncident";
    console.log(incidentObj,"before reporting incident")
    let dateObj = new Date()
    let month = incidentObj.date.getMonth() + 1;
    let day = incidentObj.date.getDate();
    let year = incidentObj.date.getFullYear();
    let date = day + "/" + month + "/" + year
    let postObj = {
      ...incidentObj,
      orgId: this.loginService.getLoginOrganizationAdminOrgId(),
      status: "reported",
      date: date,
      handlers: [{
        status: "reported",
        subOrdinateId: this.loginService.getLoginOrganizationAdminId(),
        date: date
      }]
    }
    this.apiReqStatus = false
    this.http.post(apiURL, postObj).subscribe(
      (res: any) => {
        if (res.message == "Reported Incident Successfully") {
          alert("Reported Successfully")
        }
        else {
          alert("Something Went Wrong");
        }
        this.apiReqStatus = true;
      },
      (err) => {
        alert("Something Went Wrong");
        this.apiReqStatus = true;
      }
    )
  }
  setCurrentIncident(incidentObj: any) {
    this.currentIncident = incidentObj;
  }
  getCurrentIncident() {
    return this.currentIncident
  }

  getAllIncidents(): Observable<any> {
    let apiURL = "http://localhost:8080/subOrdinate/getAllIncidents/" + this.loginService.getLoginOrganizationAdminOrgId();
    return this.http.get(apiURL);
  }
  getAllIncidentsData() {
    return this.incidentsData;
  }
  getAllOrgsIncidents(): Observable<any> {
    let apiURL = "http://localhost:8080/superAdmin/getAllIncidents"
    return this.http.get(apiURL);
  }


  changeIncidentStatus(incidentId: String, statusObj: any): Observable<any> {
    let apiURL = "http://localhost:8080/subOrdinate/changeIncidentStatus"
    let dateObj = new Date()
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = year + "/" + month + "/" + day;
    let putObj = {
      incidentId: incidentId,
      handler: {
        subOrdinateId: this.loginService.getLoginOrganizationAdminId(),
        date: newdate,
        status: statusObj.status
      }
    }
    return this.http.post(apiURL, putObj)
  }

  getAllIncidentsBySubOrdId() {
    console.log("in incident service",this.loginService.getLoginOrganizationAdminId())
    let apiURL = "http://localhost:8080/subOrdinate/getAllIncidentsBySubOrdId/" + this.loginService.getLoginOrganizationAdminId();
    return this.http.get(apiURL)
  }
}
