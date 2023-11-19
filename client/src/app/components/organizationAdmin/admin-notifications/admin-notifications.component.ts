import { Component } from '@angular/core';
import { IncidentsService } from 'src/app/services/incidents.service';
import { LoginService } from 'src/app/services/login.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent {
  notifications: any = [];

  constructor(private notificationsService:NotificationsService) {
    this.notifications=this.notificationsService.getNotifications();
    console.log(this.notifications)
  }
  
}
