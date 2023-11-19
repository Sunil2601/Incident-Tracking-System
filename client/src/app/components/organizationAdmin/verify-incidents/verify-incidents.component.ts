import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentsService } from 'src/app/services/incidents.service';

@Component({
  selector: 'app-verify-incidents',
  templateUrl: './verify-incidents.component.html',
  styleUrls: ['./verify-incidents.component.css']
})
export class VerifyIncidentsComponent {

  incidentsData: any = [];
  apiReqStatus: boolean = true;
  constructor(private incidentsService: IncidentsService, private router: Router) {
    this.apiReqStatus = false;
    this.incidentsService.getAllIncidents().subscribe(
      (res) => {
        this.apiReqStatus = true;
        console.log(res)
        for (let incident of res.payload) {
          if (incident.status == "reported") {
            this.incidentsData.push(incident);
          }
        }
        console.log(this.incidentsData)
      },
      (err) => {
        this.apiReqStatus = true
        console.error(err)
      })
  }
  getApiReqStatus(): boolean {
    return this.apiReqStatus;
  }
  onView(idx: number) {
    this.incidentsService.setCurrentIncident(this.incidentsData[idx])
    this.router.navigate(["organizationAdminDashboard/viewIncident"])

  }
  onVerify(idx: number) {
    this.apiReqStatus=false;
    this.incidentsService.changeIncidentStatus(this.incidentsData[idx].id, { status: "verified" }).subscribe(
      (res) => {
        this.incidentsData.splice(idx,1)
        this.apiReqStatus=true;
        if (res.message == "Added Handler Successfully") {
          alert("Verified Successfully");
        }
        else {
          alert("Something Went Wrong")
        }

      },
      (err) => {
        this.apiReqStatus=true;
        alert("Something Went Wrong")
      }
    )

  }
}
