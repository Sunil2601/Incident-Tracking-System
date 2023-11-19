import { Component } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from 'src/app/services/login.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm: FormGroup;

  constructor(private loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      role: new FormControl("", [Validators.required])
    })
  }


  /**
   * 
   * @returns true if the form inputs has any errors
   */
isButtonDisabled(): boolean {
    if (
      this.loginForm.get('email')?.hasError("required") ||
      this.loginForm.get('email')?.hasError("email") ||
      this.loginForm.get('password')?.hasError("required") ||
      this.loginForm.get('role')?.hasError("required")
    ) { return true; }
    return false;

  }

  /**
   * A function to handle the submitted data 
   */
  onLoginFromSubmit(): void {
    if (this.isButtonDisabled()) {
      alert("Enter Details Correctly")
    }
    else {
      this.loginService.loginUser(this.loginForm.value)
    }
  }

  getApiReqStatus():boolean{
    return this.loginService.getApiReqStatus();
  }
}
