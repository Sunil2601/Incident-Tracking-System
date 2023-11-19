import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizationAdminComponent } from './add-organization-admin.component';

describe('AddOrganizationAdminComponent', () => {
  let component: AddOrganizationAdminComponent;
  let fixture: ComponentFixture<AddOrganizationAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrganizationAdminComponent]
    });
    fixture = TestBed.createComponent(AddOrganizationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
