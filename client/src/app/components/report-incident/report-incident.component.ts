import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { IncidentsService } from 'src/app/services/incidents.service';
import { OrganizationAdminService } from 'src/app/services/organization-admin.service';
import { SuperAdminService } from 'src/app/services/super-admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-report-incident',
  templateUrl: './report-incident.component.html',
  styleUrls: ['./report-incident.component.css']
})
export class ReportIncidentComponent implements OnInit {

  reportIncidentForm: FormGroup;

  constructor(private superAdminService: SuperAdminService, private usersService: UserService, private organizationService: OrganizationAdminService, private incidentsService: IncidentsService) {
    this.reportIncidentForm = new FormGroup({
      userEmail: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      time: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      incidentType: new FormControl("", Validators.required)
    })
    this.usersService.getAllOrganizationUsersData();
    this.incidentsService.getIncidentTypes()
    this.options = this.usersService.getAllOrganizationsUsersEmails();
    this.incidentTypeOptions = incidentsService.getIncidentTypesData();
  }
  myControl = new FormControl('');
  options: String[] = [];
  incidentTypeOptions: String[] = [];
  filteredOptions: Observable<String[]> | undefined;


  ngOnInit() {
    this.filteredOptions = this.reportIncidentForm.get('userEmail')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    console.log(this.filteredOptions)
  }

  getIncidentTypes() {
    return this.incidentTypeOptions;
  }

  private _filter(value: String): String[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option != null && option.toLowerCase().includes(filterValue));
  }


  /**
   * 
   * @returns true if the form inputs has any errors
   */
  isButtonDisabled(): boolean {
    if (
      this.reportIncidentForm.get('userEmail')?.hasError("required") ||
      this.reportIncidentForm.get('date')?.hasError("required") ||
      this.reportIncidentForm.get('time')?.hasError("required") ||
      this.reportIncidentForm.get('description')?.hasError("required")
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
      let date = new Date();
      let submittedDate: any = this.reportIncidentForm.value.date;
      if (date.getTime() < submittedDate.getTime()) {
        alert("Invalid Date Chosen")
      }
      else {

        this.incidentsService.reportNewIncident(this.reportIncidentForm.value);
      }
    }
  }

  getApiRequestStatus(): boolean {
    if (this.usersService.getApiReqStatus()) {
      this.options = this.usersService.getAllOrganizationsUsersEmails();
      this.incidentTypeOptions = this.incidentsService.getIncidentTypesData();
      return true;
    }
    return false;
  }

}
