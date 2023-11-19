import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubordinateComponent } from './add-subordinate.component';

describe('AddSubordinateComponent', () => {
  let component: AddSubordinateComponent;
  let fixture: ComponentFixture<AddSubordinateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubordinateComponent]
    });
    fixture = TestBed.createComponent(AddSubordinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
