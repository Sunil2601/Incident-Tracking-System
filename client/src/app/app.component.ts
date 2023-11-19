import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'incident-tracking-system';
  public toggleBarIcon:boolean=true;
  constructor(){

  }
  toggle():void{
    let self=this;
    setTimeout(()=>{
      self.toggleBarIcon=!self.toggleBarIcon;

    },500)
  }
}
