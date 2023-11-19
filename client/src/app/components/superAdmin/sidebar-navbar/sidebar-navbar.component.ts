import { NoopAnimationPlayer } from '@angular/animations';
import { Component } from '@angular/core';
import { IncidentsService } from 'src/app/services/incidents.service';
import { LoginService } from 'src/app/services/login.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-sidebar-navbar',
  templateUrl: './sidebar-navbar.component.html',
  styleUrls: ['./sidebar-navbar.component.css']
})
export class SidebarNavbarComponent {
  apiReqStatus:boolean=true;
  notifications:any=[];
  notificationsCount:number=0;
  constructor(private loginService:LoginService,private notificationsService:NotificationsService,private incidentsService:IncidentsService){
    this.apiReqStatus = false;
    this.incidentsService.getAllOrgsIncidents().subscribe(
      (res) => {
        this.apiReqStatus = true;
        for (let incident of res.payload) {
            console.log(incident.date)
            let dateObj = new Date()
            let day = dateObj.getUTCDate();
            let reportedDate = incident.date.substring(0, 2)
            if (Math.abs((+day) - (+reportedDate)) >2) {
              this.notifications.push(incident);
            }
        }
        notificationsService.setNotifications(this.notifications)
        this.notificationsCount=this.notifications.length;
        this.notificationsService.sendEmails();
      },
      (err) => {
        this.apiReqStatus = true;
        console.error(err)
      }
    )
  }

  getAPiReqStatus():boolean{
    return this.apiReqStatus;
  }
  logout(){ 
    this.loginService.logout();
  }
}
