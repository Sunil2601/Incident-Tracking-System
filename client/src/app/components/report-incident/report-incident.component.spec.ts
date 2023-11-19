import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportIncidentComponent } from './report-incident.component';

describe('ReportIncidentComponent', () => {
  let component: ReportIncidentComponent;
  let fixture: ComponentFixture<ReportIncidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportIncidentComponent]
    });
    fixture = TestBed.createComponent(ReportIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
