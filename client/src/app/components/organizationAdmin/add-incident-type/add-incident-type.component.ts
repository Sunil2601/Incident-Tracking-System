import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, startWith, map } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { OrganizationAdminService } from 'src/app/services/organization-admin.service';

@Component({
  selector: 'app-add-incident-type',
  templateUrl: './add-incident-type.component.html',
  styleUrls: ['./add-incident-type.component.css']
})
export class AddIncidentTypeComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  incidentTypesFormControl = new FormControl('');
  filteredIncidentTypes: Observable<string[]>;
  incidentTypes: string[] = ['Physical Injury'];
  allIncidentTypes: string[] = ['Phyical Injury', 'Fire Accident', 'Health Issue', 'Allergy', 'Sun Stroke', 'Theft'];

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);
  constructor(private organizationAdminService:OrganizationAdminService) {
    this.filteredIncidentTypes
      = this.incidentTypesFormControl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allIncidentTypes.slice())),
      );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.incidentTypes.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.incidentTypesFormControl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.incidentTypes.indexOf(fruit);

    if (index >= 0) {
      this.incidentTypes.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.incidentTypes.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.incidentTypesFormControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allIncidentTypes.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  onSubmit(): void {
    if (this.incidentTypes.length == 0) {
      alert("Please Enter Atleast One Type")
    }
    else {
      this.organizationAdminService.addIncidentType(this.incidentTypes);
      this.incidentTypes=[]
    }
  }


}
