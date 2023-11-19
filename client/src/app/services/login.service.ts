import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel'
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { ContentObserver } from '@angular/cdk/observers';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiRequestStatus = true;
  loggedInUserRole: String | undefined;
  loggedInUserDetails: any;

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(loginObj: LoginModel) {
    if (loginObj.role == "superAdmin") {
      this.apiRequestStatus = false;
      let postObj = { email: loginObj.email, password: loginObj.password }
      this.http.post<any>('http://localhost:8080/superAdmin/login', postObj).subscribe((response) => {
        this.apiRequestStatus=true;
        if (response.message == "Wrong Email") {
          alert("Wrong Email")
        }
        else if (response.message == "Wrong Password") {
          alert("Wrong Password")
        }
        else if (response.message == "Login Success") {
          alert("Login Successfull")
          this.loggedInUserRole = "superAdmin";
          localStorage.setItem("loggedInUserDetails", JSON.stringify(response.responseObj))
          localStorage.setItem("loggedInUserRole", "superAdmin")
          this.router.navigate(["/superAdminDashboard"])
        }
        else {
          alert("Something Went Wrong")
        }
        this.apiRequestStatus = true;
      },
        (error) => {
          this.apiRequestStatus=true;
          alert("Something Went Wrong")
        });
    }
    else if (loginObj.role == "organizationAdmin" || loginObj.role == "organizationSubOrdinate") {
      this.apiRequestStatus = false;
      let postObj = { email: loginObj.email, password: loginObj.password }
      this.http.post<any>('http://localhost:8080/subOrdinate/loginSubOrdinate', postObj).subscribe((response) => {
        this.apiRequestStatus=true;  
      if (response.message == "Wrong Email") {
          alert("Wrong Email")
        }
        else if (response.message == "Wrong Password") {
          alert("Wrong Password")
        }
        else if (response.message == "Login Success") {
          alert("Login Successfull")
          if (response.responseObj.role == "admin") {
            localStorage.setItem("loggedInUserRole", "admin")
            localStorage.setItem("loggedInUserDetails", JSON.stringify(response.responseObj))
            this.router.navigate(["/organizationAdminDashboard"])
          }
          else {
            localStorage.setItem("loggedInUserRole", "subordinate")
            localStorage.setItem("loggedInUserDetails", JSON.stringify(response.responseObj))
            this.router.navigate(["/organizationSubOrdinateDashboard"])
          }
        }
        else {
          alert("Something Went Wrong")
        }
        this.apiRequestStatus = true;
      },
        (error) => {
          this.apiRequestStatus=true;
          alert("Something Went Wrong")
        });
    }
    else {
      alert("Something Went Wrong")
    }
  }
  getLoggedInUserRole(): any {
    let temp = localStorage.getItem("loggedInUserRole") || "";
    return temp;
  }
  logout() {
    localStorage.removeItem("loggedInUserRole")
    localStorage.removeItem("loggedInUserDetails")
    localStorage.removeItem("notifications")
  }

  getLoginOrganizationAdminOrgId(): String {
    let temp = JSON.parse(localStorage.getItem("loggedInUserDetails") || "")
    return temp.orgId;
  }
  getLoggedInUserEmail():String{
    let temp = JSON.parse(localStorage.getItem("loggedInUserDetails") || "")
    return temp.email;
  }

  getLoginOrganizationAdminId(): String {
    let temp = JSON.parse(localStorage.getItem("loggedInUserDetails") || "")
    return temp.id;
  }
  getApiReqStatus():boolean{
    return this.apiRequestStatus;
  }
}
