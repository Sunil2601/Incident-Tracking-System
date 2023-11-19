import { Component } from '@angular/core';
import { OrgSubOrgRouteGaurdService } from 'src/app/route-gaurds/org-sub-org-route-gaurd.service';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-organization-summary',
  templateUrl: './organization-summary.component.html',
  styleUrls: ['./organization-summary.component.css']
})
export class OrganizationSummaryComponent {
  orgObj:any;
  apiReqStatus:boolean=true;

  constructor(private organizationService:OrganizationService){
    this.apiReqStatus=false;
    this.organizationService.getOrgSummaryApi().subscribe(
      (res:any)=>{
        this.orgObj=res.payload;
        this.apiReqStatus=true;
      },
      (err)=>{
        this.apiReqStatus=true;
        console.log(err);
      }
    )
  }

  getApiReqStatus():boolean{
    return this.apiReqStatus;
  }

}
