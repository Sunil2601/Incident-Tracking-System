import { TestBed } from '@angular/core/testing';

import { OrgSubOrgRouteGaurdService } from './org-sub-org-route-gaurd.service';

describe('OrgSubOrgRouteGaurdService', () => {
  let service: OrgSubOrgRouteGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgSubOrgRouteGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
