import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-no-permissions-page',
  templateUrl: './no-permissions-page.component.html',
  styleUrls: ['./no-permissions-page.component.css']
})
export class NoPermissionsPageComponent {
  constructor(private router:Router){}
  goToHome(){
    this.router.navigate([""])
  }

}
