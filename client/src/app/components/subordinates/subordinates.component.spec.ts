import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinatesComponent } from './subordinates.component';

describe('SubordinatesComponent', () => {
  let component: SubordinatesComponent;
  let fixture: ComponentFixture<SubordinatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubordinatesComponent]
    });
    fixture = TestBed.createComponent(SubordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
