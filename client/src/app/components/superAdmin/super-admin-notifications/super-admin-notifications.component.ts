import { Component } from '@angular/core';
import { IncidentsService } from '../../../services/incidents.service';
import { LoginService } from '../../../services/login.service';
import { NotificationsService } from '../../../services/notifications.service';

@Component({
  selector: 'app-super-admin-notifications',
  templateUrl: './super-admin-notifications.component.html',
  styleUrls: ['./super-admin-notifications.component.css']
})
export class SuperAdminNotificationsComponent {
  notifications: any = [];
  apiReqStatus: boolean = true;
  constructor(private incidentsService: IncidentsService, private loginService: LoginService, private notificationsService: NotificationsService) {
    this.apiReqStatus = false;
    this.incidentsService.getAllOrgsIncidents().subscribe(
      (res) => {
        this.apiReqStatus = true;
        for (let incident of res.payload) {
          if (incident.orgId, this.loginService.getLoginOrganizationAdminOrgId) {
            let dateObj = new Date()
            let day = dateObj.getUTCDate();
            let reportedDate = incident.date.substring(0, 2)
            console.log(day, reportedDate, (+day) - (+reportedDate), "in side if ")
            if (Math.abs((+day) - (+reportedDate)) >2) {
              this.notifications.push(incident);
            }
          }
        }
        console.log(this.notifications)
        notificationsService.setNotifications(this.notifications)
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
}
