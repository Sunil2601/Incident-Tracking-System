import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationAdminDashboardComponent } from './organization-admin-dashboard.component';

describe('OrganizationAdminDashboardComponent', () => {
  let component: OrganizationAdminDashboardComponent;
  let fixture: ComponentFixture<OrganizationAdminDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationAdminDashboardComponent]
    });
    fixture = TestBed.createComponent(OrganizationAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
