import { Component } from '@angular/core';
import { IncidentsService } from 'src/app/services/incidents.service';
import { OrganizationAdminService } from 'src/app/services/organization-admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersData: any=[];
  constructor(private organizationAdminService: OrganizationAdminService, private incidentService: IncidentsService) {

    this.organizationAdminService.getAllOrganzationUsersDataFromApi()
  }

  getApiReqStatus(): boolean {
    if (this.organizationAdminService.getApiReqStatus()) {
      this.usersData = this.organizationAdminService.getAllOrganzationUsersData();
      console.log(this.usersData);
    }
    return this.organizationAdminService.getApiReqStatus()
  }

}
