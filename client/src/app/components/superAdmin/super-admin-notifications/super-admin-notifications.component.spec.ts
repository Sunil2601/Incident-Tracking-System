import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminNotificationsComponent } from './super-admin-notifications.component';

describe('SuperAdminNotificationsComponent', () => {
  let component: SuperAdminNotificationsComponent;
  let fixture: ComponentFixture<SuperAdminNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminNotificationsComponent]
    });
    fixture = TestBed.createComponent(SuperAdminNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
