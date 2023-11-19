import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSummaryComponent } from './organization-summary.component';

describe('OrganizationSummaryComponent', () => {
  let component: OrganizationSummaryComponent;
  let fixture: ComponentFixture<OrganizationSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationSummaryComponent]
    });
    fixture = TestBed.createComponent(OrganizationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
