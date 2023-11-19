import { Component } from '@angular/core';
import { IncidentsService } from 'src/app/services/incidents.service';
import { LoginService } from 'src/app/services/login.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-org-admin-sidebar',
  templateUrl: './org-admin-sidebar.component.html',
  styleUrls: ['./org-admin-sidebar.component.css']
})
export class OrgAdminSidebarComponent {
  apiReqStatus: boolean = true;
  notifications: any = [];
  notificationsCount: number = 0;
  constructor(private organiozationService: OrganizationService, private loginService: LoginService, private notificationsService: NotificationsService, private incidentsService: IncidentsService) {
    this.apiReqStatus = false;
    this.incidentsService.getAllIncidents().subscribe(
      (res) => {
        
        this.apiReqStatus = true;
        for (let incident of res.payload) {
          let dateObj = new Date()
          let day = dateObj.getUTCDate();
          let reportedDate = incident.date.substring(0, 2)
          if (Math.abs((+day) - (+reportedDate)) >= 2) {
            this.notifications.push(incident);
          }
        }
        notificationsService.setNotifications(this.notifications)
        this.notificationsCount = this.notificationsService.getNotifications().length
        this.notificationsService.sendEmails();
      },
      (err) => {
        this.apiReqStatus = true;
        console.error(err)
      }
    )
  }

  getAPiReqStatus(): boolean {
    return this.apiReqStatus;
  }
  logout() {
    this.loginService.logout();
  }

  f() {
    this.organiozationService.setOrgId(this.loginService.getLoginOrganizationAdminOrgId());
  }
}
