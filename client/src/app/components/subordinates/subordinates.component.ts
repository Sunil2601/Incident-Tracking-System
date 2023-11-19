import { Component } from '@angular/core';
import { IncidentsService } from 'src/app/services/incidents.service';
import { OrganizationAdminService } from 'src/app/services/organization-admin.service';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.css']
})
export class SubordinatesComponent {
  subOrdinatesData: any;
  constructor(private organizationAdminService: OrganizationAdminService, private incidentService: IncidentsService) {

    this.organizationAdminService.getAllSubOrdinatesDataFromApi()
  }

  getApiReqStatus(): boolean {
    if (this.organizationAdminService.getApiReqStatus()) {
      this.subOrdinatesData = this.organizationAdminService.getOrganizationSubOrdinatesData();
      console.log(this.subOrdinatesData);
    }
    return this.organizationAdminService.getApiReqStatus()
  }

}
