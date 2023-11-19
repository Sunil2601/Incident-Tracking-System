import { Component } from '@angular/core';
import { IncidentsService } from 'src/app/services/incidents.service';
import { OrganizationAdminService } from 'src/app/services/organization-admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  incidentsData: any;
  apiReqStatus: boolean = true;

  statsData: any = [];
  values: number[] = [];
  cardStyles: String[] = []

  todaysIncidentsStatus: any = [];
constructor(private incidentService: IncidentsService, private userService: UserService,private orgAdminService:OrganizationAdminService) {
    this.userService.getAllOrganizationUsersData()
    this.orgAdminService.getAllSubOrdinatesDataFromApi()
    this.statsData = [
      "reported", "verified", "processing", "completed"
    ];
    this.values = [0, 0, 0, 0];
    this.cardStyles = ['card border-left-primary shadow h-100 py-2 border-left-primary', 'card border-left-primary shadow h-100 py-2 border-left-success', ' card border-left-primary shadow h-100 py-2 border-left-danger', 'card border-left-primary shadow h-100 py-2 border-left-warning']
    this.todaysIncidentsStatus = [
      {
        incident: "reported",
        value: 0,
        style: ""
      },
      {
        incident: "verified",
        value: 0,
        style: ""
      },
      {
        incident: "processing",
        value: 0,
        style: "width:"
      },
      {
        incident: "completed",
        value: 0,
        style: ""
      }
    ]

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

  }

  setStatistics() {
    let dateObj = new Date()
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = year + "/" + month + "/" + day;
    let statsObj = this.statsData;
    for (let incidet of this.incidentsData) {
      if (incidet.handlers[incidet.handlers.length - 1].date == newdate) {
        console.log(incidet.handlers[incidet.handlers.length - 1].date, newdate, "********")
        if (incidet.status == "reported") {

          this.todaysIncidentsStatus[0].value += 1

        }
        else if (incidet.status == "verified") {
          for (let i = 1; i >= 0; i--) {
            this.todaysIncidentsStatus[i].value += 1
          }
        }
        else if (incidet.status == "processing") {

          this.todaysIncidentsStatus[2].value += 1

        }
        else if (incidet.status == "completed") {

          this.todaysIncidentsStatus[3].value += 1

        }
      }
      if (incidet.status == "reported") {
        for (let i = 0; i >= 0; i--) {
          this.values[i] += 1
        }
      }
      else if (incidet.status == "verified") {
        for (let i = 1; i >= 0; i--) {
          this.values[i] += 1
        }
      }
      else if (incidet.status == "processing") {
        for (let i = 2; i >= 0; i--) {
          this.values[i] += 1
        }
      }
      else if (incidet.status == "completed") {
        for (let i = 3; i >= 0; i--) {
          this.values[i] += 1; console.log(statsObj, incidet.status);
        }
      }
    }
    this.statsData = statsObj
  }

  getApiReqStatus(): boolean {
    return this.apiReqStatus;
  }

  getTotalUsersCount(): number {
    return this.userService.getAllOrganizationsUsersEmails().length;
  }
  getTotalSubOrdinatesCount():number{
    return this.orgAdminService.getOrganizationSubOrdinatesData().length;
  }



}
