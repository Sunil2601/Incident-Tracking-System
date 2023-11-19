import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrganizationAdminService } from 'src/app/services/organization-admin.service';
import { SuperAdminService } from 'src/app/services/super-admin.service';

@Component({
  selector: 'app-add-subordinate',
  templateUrl: './add-subordinate.component.html',
  styleUrls: ['./add-subordinate.component.css']
})
export class AddSubordinateComponent {
  addSubOrdinateForm: FormGroup;

  constructor(private orgAdminService:OrganizationAdminService) {
    this.addSubOrdinateForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl("", [Validators.required]),
    })
  }


  /**
   * 
   * @returns true if the form inputs has any errors
   */
  isButtonDisabled(): boolean {
    if (
      this.addSubOrdinateForm.get('name')?.hasError("required")||
      this.addSubOrdinateForm.get('email')?.hasError("required")||
      this.addSubOrdinateForm.get('email')?.hasError("email")||
      this.addSubOrdinateForm.get('password')?.hasError("required")

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
      console.log(this.addSubOrdinateForm.value)
      this.orgAdminService.addSubOrdinate({...this.addSubOrdinateForm.value})
    }
  }

}
