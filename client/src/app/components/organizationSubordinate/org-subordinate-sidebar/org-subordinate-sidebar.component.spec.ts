import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSubordinateSidebarComponent } from './org-subordinate-sidebar.component';

describe('OrgSubordinateSidebarComponent', () => {
  let component: OrgSubordinateSidebarComponent;
  let fixture: ComponentFixture<OrgSubordinateSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSubordinateSidebarComponent]
    });
    fixture = TestBed.createComponent(OrgSubordinateSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
