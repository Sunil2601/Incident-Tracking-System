import { Component } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from 'src/app/services/login.service';
import { SuperAdminService } from 'src/app/services/super-admin.service';


@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent {

  addOrganizationForm: FormGroup;

  constructor(private superAdminService:SuperAdminService) {
    this.addOrganizationForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl(""),
    })
  }


  /**
   * 
   * @returns true if the form inputs has any errors
   */
  isButtonDisabled(): boolean {
    if (
      this.addOrganizationForm.get('name')?.hasError("required")
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
      console.log(this.addOrganizationForm.value)
      this.superAdminService.addOrganization({...this.addOrganizationForm.value,incidentTypes:[]})
    }
  }
}
