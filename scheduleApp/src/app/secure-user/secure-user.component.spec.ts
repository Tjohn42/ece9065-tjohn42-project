import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureUserComponent } from './secure-user.component';

describe('SecureUserComponent', () => {
  let component: SecureUserComponent;
  let fixture: ComponentFixture<SecureUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
