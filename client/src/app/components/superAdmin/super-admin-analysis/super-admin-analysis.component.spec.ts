import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminAnalysisComponent } from './super-admin-analysis.component';

describe('SuperAdminAnalysisComponent', () => {
  let component: SuperAdminAnalysisComponent;
  let fixture: ComponentFixture<SuperAdminAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminAnalysisComponent]
    });
    fixture = TestBed.createComponent(SuperAdminAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
