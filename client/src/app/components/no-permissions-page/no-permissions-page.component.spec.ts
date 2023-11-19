import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPermissionsPageComponent } from './no-permissions-page.component';

describe('NoPermissionsPageComponent', () => {
  let component: NoPermissionsPageComponent;
  let fixture: ComponentFixture<NoPermissionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoPermissionsPageComponent]
    });
    fixture = TestBed.createComponent(NoPermissionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
