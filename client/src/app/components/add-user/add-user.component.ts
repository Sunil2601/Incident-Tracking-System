import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { OrganizationAdminService } from 'src/app/services/organization-admin.service';
import { UserService } from 'src/app/services/user.service';
import * as Papa from 'papaparse';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addUserForm: FormGroup;
  csvForm: FormGroup ;
  tableHeaders: string[] | undefined;
  tableData: any[] = [];

  constructor(private orgAdminService: OrganizationAdminService, private userService: UserService, private formBuilder: FormBuilder) {
    this.addUserForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      age: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", Validators.required)
    })
    this.csvForm = this.formBuilder.group({
      csvFile: ['', Validators.required]
    });
  }


  /**
   * 
   * @returns true if the form inputs has any errors
   */
  isButtonDisabled(): boolean {
    if (
      this.addUserForm.get('name')?.hasError("required") ||
      this.addUserForm.get('email')?.hasError("required") ||
      this.addUserForm.get('age')?.hasError("required") ||
      this.addUserForm.get('phoneNumber')?.hasError("required")

    ) { return true; }
    return false;
  }

  /**
   * A function to handle the submitted data 
   */
  onFormSubmit(): void {
    if (this.isButtonDisabled()) {
      alert("Enter Details Correctly")
    }
    else {
      this.userService.addUserApi(this.addUserForm.value);
    }
  }

  onFileUpload(event: any) {
    const file =event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        this.userService.addUsersViaCSVFile(results)
      }
    });
  }

  getApiReqStatusFromService(): boolean {
    return this.userService.getApiReqStatus();
  }

}
