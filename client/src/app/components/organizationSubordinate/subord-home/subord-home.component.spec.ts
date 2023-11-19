import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordHomeComponent } from './subord-home.component';

describe('SubordHomeComponent', () => {
  let component: SubordHomeComponent;
  let fixture: ComponentFixture<SubordHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubordHomeComponent]
    });
    fixture = TestBed.createComponent(SubordHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
