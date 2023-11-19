import { TestBed } from '@angular/core/testing';

import { OrgAdminGaurdService } from './org-admin-gaurd.service';

describe('OrgAdminGaurdService', () => {
  let service: OrgAdminGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgAdminGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
