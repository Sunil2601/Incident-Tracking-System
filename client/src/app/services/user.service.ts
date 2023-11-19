import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormStyle } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiReqStatus: boolean = true;
  usersData:any=[];

  constructor(private loginService: LoginService, private http: HttpClient) { }

  addUserApi(userObj: any) {
    this.apiReqStatus = false
    let apiURL = "http://localhost:8080/subOrdinate/createSingleUser"
    let postObj = {
      ...userObj,
      orgId: this.loginService.getLoginOrganizationAdminOrgId()
    }
    this.http.post(apiURL, postObj).subscribe(
      (res: any) => {
        this.apiReqStatus = true;
        if (res.message == "User created successfully") {
          alert("User created successfully");
        }
        else {
          alert("Something Went Wrong")
        }

      },
      (err) => {
        this.apiReqStatus = true;
        alert("Something Went Wrong");

      }
    )
  }
  getApiReqStatus(): boolean {
    return this.apiReqStatus;
  }


  addUsersViaCSVFile(usersObj: any): void {
    this.apiReqStatus=false;
    let apiURL = "http://localhost:8080/subOrdinate/addMultipleUser"
    let postObj:any={ users:[] }
    for(let user of  usersObj.data){
      let temp:any={...user,orgId:this.loginService.getLoginOrganizationAdminOrgId()}
      postObj.users.push(temp);
    }
    this.http.post(apiURL, postObj).subscribe(
      (res: any) => {
        if(res.message=="Users Added Successfully"){
          this.apiReqStatus=true;
          alert("Users Added Successfully")
        }
        else{
          this.apiReqStatus=true
          alert("Something Went Wrong")
        }
      },
      (err) => {
        alert("Error in adding users")
      }
    )
  }

  getAllOrganizationUsersData(){
    let apiURL="http://localhost:8080/subOrdinate/getAllUsers/"+this.loginService.getLoginOrganizationAdminOrgId();
    this.apiReqStatus=false;
    this.http.get(apiURL).subscribe(
      (res:any)=>{
        if(res.message=="Users Found Successfully"){
          this.usersData=res.payload;
          this.apiReqStatus=true;
        }
        else{
          alert("Something Went Wrong")
        }
        this.apiReqStatus=true;
      },
      (err)=>{
        this.apiReqStatus=true;
        alert("Something Went Wrong")
      }
    )
  }

  getAllOrganizationsUsersEmails():String[]{
    let temp=[]
    for(let user of this.usersData){
      temp.push(user.email);
    }
    return temp;
  }
}
