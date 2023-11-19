import { TestBed } from '@angular/core/testing';

import { OrganizationAdminService } from './organization-admin.service';

describe('OrganizationAdminService', () => {
  let service: OrganizationAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
