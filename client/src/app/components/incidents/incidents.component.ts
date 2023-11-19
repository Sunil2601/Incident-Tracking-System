import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Organization } from 'src/app/models/organization';
import { IncidentsService } from 'src/app/services/incidents.service';
import { LoginService } from 'src/app/services/login.service';
import { SuperAdminService } from 'src/app/services/super-admin.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent {
  incidentsData: any;
  apiReqStatus: boolean = true;
  constructor(private incidentService: IncidentsService, private router: Router, private loginService: LoginService) {
    this.apiReqStatus = false;
    if (loginService.getLoggedInUserRole() == "admin" || loginService.getLoggedInUserRole() == "subordinate") {
      this.incidentService.getAllIncidents().subscribe(
        (res: any) => {
          this.incidentsData = res.payload;
          this.apiReqStatus = true;
        },
        (err) => {
          console.error(err)
          this.apiReqStatus = true;
        }
      );
    }
    else if (loginService.getLoggedInUserRole() == "superAdmin") {
      this.incidentService.getAllOrgsIncidents().subscribe(
        (res: any) => {
          this.incidentsData = res.payload;
          this.apiReqStatus = true;
        },
        (err) => {
          console.error(err)
          this.apiReqStatus = true;
        }
      );
    }

  }
  ngOnInit(): void {

  }

  getApiRequestStatus(): boolean {
    return this.apiReqStatus;
  }

  onView(idx: number) {
    this.incidentService.setCurrentIncident(this.incidentsData[idx])
    this.router.navigate(["organizationSubOrdinateDashboard/viewIncidentDetails"])
  }
  onEdit(idx: number) {
    this.incidentService.setCurrentIncident(this.incidentsData[idx])
    this.router.navigate(["organizationSubOrdinateDashboard/changeIncidentStatus"])
  }
  isShowable(): boolean {
    if (this.loginService.getLoggedInUserRole() == "subordinate") { return true; }
    else {
      return false;
    }
  }
}
