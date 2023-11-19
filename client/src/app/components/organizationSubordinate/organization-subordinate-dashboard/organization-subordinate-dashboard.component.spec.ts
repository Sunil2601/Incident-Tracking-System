import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSubordinateDashboardComponent } from './organization-subordinate-dashboard.component';

describe('OrganizationSubordinateDashboardComponent', () => {
  let component: OrganizationSubordinateDashboardComponent;
  let fixture: ComponentFixture<OrganizationSubordinateDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationSubordinateDashboardComponent]
    });
    fixture = TestBed.createComponent(OrganizationSubordinateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
