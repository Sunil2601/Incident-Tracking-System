import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncidentTypeComponent } from './add-incident-type.component';

describe('AddIncidentTypeComponent', () => {
  let component: AddIncidentTypeComponent;
  let fixture: ComponentFixture<AddIncidentTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIncidentTypeComponent]
    });
    fixture = TestBed.createComponent(AddIncidentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
