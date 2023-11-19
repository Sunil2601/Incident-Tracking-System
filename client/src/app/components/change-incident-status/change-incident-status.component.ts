import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IncidentsService } from 'src/app/services/incidents.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-change-incident-status',
  templateUrl: './change-incident-status.component.html',
  styleUrls: ['./change-incident-status.component.css']
})
export class ChangeIncidentStatusComponent {
  updateIncidentForm: FormGroup;
  status: Array<Array<String>>;
  incident: any;
  apiReqStatus: boolean = true;

  constructor(private loginService: LoginService, private incidentsService: IncidentsService) {
    this.incident = incidentsService.getCurrentIncident();
    this.updateIncidentForm = new FormGroup({
      id: new FormControl({ value: this.incident.id, disabled: true }, [Validators.required]),
      status: new FormControl(this.incident.status, [Validators.required])
    })
    console.log(this.incident)
    this.status = [ ["Process", "processing"], ["Complete", "completed"], ["Close", "closed"]];
  }

  getApiReqStatus(): boolean {
    return this.apiReqStatus;
  }

  /**
   * 
   * @returns true if the form inputs has any errors
   */
  isButtonDisabled(): boolean {
    if (
      this.updateIncidentForm.get('id')?.hasError("required") ||
      this.updateIncidentForm.get('status')?.hasError("required")
    ) { return true; }
    return false;
  }

  /**
   * A function to handle the submitted data 
   */
  onChangeIncidentStatus(): void {
    if (this.isButtonDisabled()) {
      alert("Enter Details Correctly")
    }
    else {
      if (this.incident.status == "verified" && this.updateIncidentForm.get("status")?.value == "processing" ||
        this.incident.status == "processing" && this.updateIncidentForm.get("status")?.value == "completed" ||
        this.incident.status == "completed" && this.updateIncidentForm.get("status")?.value == "closed") {
        this.apiReqStatus = false;
        this.incidentsService.changeIncidentStatus(this.incident.id, this.updateIncidentForm.value).subscribe(
          (res: any) => {
            this.apiReqStatus = true;
            if (res.message == "Error") {
              alert("Inavlid Incident Id")
            }
            else if (res.message == "Added Handler Successfully") {
              alert("Updated Status Successfully")
            }
            else {
              alert("Something Went Wrong")
            }
          },
          (err) => {
            this.apiReqStatus = true
            alert("Error in updating Status")
          }
        )
      }
      else{
        alert("Can't Change Status to "+this.updateIncidentForm.get("status")?.value)
      }
    }
  }
}
