import { Component } from '@angular/core';
import { IncidentsService } from 'src/app/services/incidents.service';
import { LoginService } from 'src/app/services/login.service';
import { OrganizationAdminService } from 'src/app/services/organization-admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-subord-home',
  templateUrl: './subord-home.component.html',
  styleUrls: ['./subord-home.component.css']
})
export class SubordHomeComponent {
  incidentsData: any;
  apiReqStatus: boolean = true;

  statsData: any = [];
  values: number[] = [];
  cardStyles: String[] = []
  incidents: any = []


  todaysIncidentsStatus: any = [];
  constructor(private incidentService: IncidentsService, private userService: UserService, private orgAdminService: OrganizationAdminService, private loginService: LoginService) {
    this.userService.getAllOrganizationUsersData()
    this.orgAdminService.getAllSubOrdinatesDataFromApi()
    this.statsData = [
      "reported", "processing", "completed"
    ];
    this.values = [0, 0, 0];
    this.cardStyles = ['card border-left-primary shadow h-100 py-2 border-left-primary', 'card border-left-primary shadow h-100 py-2 border-left-success', ' card border-left-primary shadow h-100 py-2 border-left-danger', 'card border-left-primary shadow h-100 py-2 border-left-warning']


    this.apiReqStatus = false;
    this.incidentService.getAllIncidents().subscribe(
      (res: any) => {
        this.apiReqStatus = true;
        this.incidentsData = res.payload;
        this.setStatistics();
      },
      (err) => {
        this.apiReqStatus = true;
      }
    )
    this.apiReqStatus = false;
    this.incidentService.getAllIncidentsBySubOrdId().subscribe(
      (res: any) => {
        this.apiReqStatus = true;
        this.incidents = res.payload;
      },
      (err) => {
        this.apiReqStatus = true;
      }
    )


  }

  setStatistics() {
    let dateObj = new Date()
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = year + "/" + month + "/" + day;
    let statsObj = this.statsData;
    for (let incidet of this.incidentsData) {
      if (incidet.status == "reported" && incidet.handlers.length > 0 && incidet.handlers[0].subOrdinateId == this.loginService.getLoginOrganizationAdminId()) {
        this.values[0] += 1
      }
      else if (incidet.status == "processing" && incidet.handlers.length > 2 && incidet.handlers[2].subOrdinateId == this.loginService.getLoginOrganizationAdminId()) {
        this.values[1] += 1
      }
      else if (incidet.status == "completed" && incidet.handlers.length > 3 && incidet.handlers[3].subOrdinateId == this.loginService.getLoginOrganizationAdminId()) {
        this.values[2] += 1;
      }
      console.log(this.todaysIncidentsStatus, "in admin home")
      this.statsData = statsObj
    }
  }

  getApiReqStatus(): boolean {
    return this.apiReqStatus;
  }

  getTotalUsersCount(): number {
    return this.userService.getAllOrganizationsUsersEmails().length;
  }
  getTotalSubOrdinatesCount(): number {
    return this.orgAdminService.getOrganizationSubOrdinatesData().length;
  }
}
