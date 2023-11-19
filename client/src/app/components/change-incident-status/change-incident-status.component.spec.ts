import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeIncidentStatusComponent } from './change-incident-status.component';

describe('ChangeIncidentStatusComponent', () => {
  let component: ChangeIncidentStatusComponent;
  let fixture: ComponentFixture<ChangeIncidentStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeIncidentStatusComponent]
    });
    fixture = TestBed.createComponent(ChangeIncidentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
