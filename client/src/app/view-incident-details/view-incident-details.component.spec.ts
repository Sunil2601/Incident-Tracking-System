import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIncidentDetailsComponent } from './view-incident-details.component';

describe('ViewIncidentDetailsComponent', () => {
  let component: ViewIncidentDetailsComponent;
  let fixture: ComponentFixture<ViewIncidentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewIncidentDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewIncidentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
