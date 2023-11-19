import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-org-subordinate-sidebar',
  templateUrl: './org-subordinate-sidebar.component.html',
  styleUrls: ['./org-subordinate-sidebar.component.css']
})
export class OrgSubordinateSidebarComponent {
  constructor(private loginService: LoginService) { }
  logout() {
    this.loginService.logout()
  }
}
