import { TestBed } from '@angular/core/testing';

import { SuperAdminRouteGaurdService } from './super-admin-route-gaurd.service';

describe('SuperAdminRouteGaurdService', () => {
  let service: SuperAdminRouteGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperAdminRouteGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
