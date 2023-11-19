import { Component } from '@angular/core';
import { IncidentsService } from '../services/incidents.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-incident-details',
  templateUrl: './view-incident-details.component.html',
  styleUrls: ['./view-incident-details.component.css']
})
export class ViewIncidentDetailsComponent {
  incident: any;
  constructor(private incidentService: IncidentsService, private router: Router) {
    this.incident = this.incidentService.getCurrentIncident();
    console.log(this.incident.handlers)
  }

  onChangeIncidentStatus() {
    this.incidentService.setCurrentIncident(this.incident);
    this.router.navigate(["organizationSubOrdinateDashboard/changeIncidentStatus"])
  }

  getStatus():String{
    return this.incident.status;

  }
  getValue():number{
    switch(this.incident.status){
      case "reported":return 20;
      case "verified":return 40;
      case "processing":return 60;
      case "completed":return 80;
      case "closed":return 100;
    }
    return 100;
  }
}
