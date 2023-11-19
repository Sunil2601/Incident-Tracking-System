import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { SuperAdminDashboardComponent } from '../super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminService } from 'src/app/services/super-admin.service';
import { OrganizationService } from 'src/app/services/organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-organizations',
  templateUrl: './all-organizations.component.html',
  styleUrls: ['./all-organizations.component.css']
})
export class AllOrganizationsComponent implements OnInit{
  organizatonsData:Organization[]|undefined;
  constructor(private superAdminService:SuperAdminService,private organizationService:OrganizationService,private router:Router){

  }
  ngOnInit(): void {
    this.superAdminService.getOrganizationsData();
  }

  getApiRequestStatus():boolean{
    if(this.superAdminService.getApiRequestStatus()){
      this.organizatonsData=this.superAdminService.getOrganizationsList();
      return true
    }
    return false;
  }

  viewMore(orgId:String){

  this.organizationService.setOrgId(orgId);
  this.router.navigate(["superAdminDashboard/viewOrganizationSummary"])
  }


}
