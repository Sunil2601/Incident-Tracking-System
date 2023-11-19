import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyIncidentsComponent } from './verify-incidents.component';

describe('VerifyIncidentsComponent', () => {
  let component: VerifyIncidentsComponent;
  let fixture: ComponentFixture<VerifyIncidentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyIncidentsComponent]
    });
    fixture = TestBed.createComponent(VerifyIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
