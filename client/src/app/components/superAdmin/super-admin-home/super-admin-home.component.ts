import { Component } from '@angular/core';
import { IncidentsService } from 'src/app/services/incidents.service';
import { OrganizationAdminService } from 'src/app/services/organization-admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-super-admin-home',
  templateUrl: './super-admin-home.component.html',
  styleUrls: ['./super-admin-home.component.css']
})
export class SuperAdminHomeComponent {
  incidentsData: any;
  apiReqStatus: boolean = true;

  statsData: any = [];
  values: number[] = [];
  cardStyles: String[] = []

  todaysIncidentsStatus: any = [];
  constructor(private incidentService: IncidentsService, private userService: UserService, private orgAdminService: OrganizationAdminService) {
    this.userService.getAllOrganizationUsersData()
    this.orgAdminService.getAllSubOrdinatesDataFromApi()
    this.statsData = [
      "Organizations", "Users", "Incidents", "Admins"
    ];
    this.values = [89, 40, 24, 96];
    this.cardStyles = ['card border-left-primary shadow h-100 py-2 border-left-primary', 'card border-left-primary shadow h-100 py-2 border-left-success', ' card border-left-primary shadow h-100 py-2 border-left-danger', 'card border-left-primary shadow h-100 py-2 border-left-warning']
  }

  setStatistics() {
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
