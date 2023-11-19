import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { Organization } from 'src/app/models/organization';
import { SuperAdminService } from 'src/app/services/super-admin.service';

@Component({
  selector: 'app-add-organization-admin',
  templateUrl: './add-organization-admin.component.html',
  styleUrls: ['./add-organization-admin.component.css']
})
export class AddOrganizationAdminComponent implements OnInit {

  addOrgnizationAdminForm: FormGroup;

  constructor(private superAdminService: SuperAdminService) {
    this.addOrgnizationAdminForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      organizationName: new FormControl("", [Validators.required])
    })
    this.options = superAdminService.getAllOrganizationsNames();
  }
  myControl = new FormControl('');
  options: String[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<String[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.addOrgnizationAdminForm.get('organizationName')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.superAdminService.getOrganizationsData();
  }

  private _filter(value: String): String[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  /**
   * 
   * @returns true if the form inputs has any errors
   */
  isButtonDisabled(): boolean {
    if (
      this.addOrgnizationAdminForm.get('name')?.hasError("required") ||
      this.addOrgnizationAdminForm.get('organizationName')?.hasError("required") ||
      this.addOrgnizationAdminForm.get('email')?.hasError("required") ||
      this.addOrgnizationAdminForm.get('password')?.hasError("required")
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
      console.log(this.addOrgnizationAdminForm.value)
      this.superAdminService.addOrgnizationAdmin(this.addOrgnizationAdminForm.value)
    }
  }

  getApiRequestStatus(): boolean {
    if (this.superAdminService.getApiRequestStatus()) {
      this.options = this.superAdminService.getAllOrganizationsNames();
      return true;
    }
    return false;
  }

}
