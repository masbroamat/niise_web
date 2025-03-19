import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationForgotPasswordComponent } from './verification-forgot-password.component';

describe('VerificationForgotPasswordComponent', () => {
  let component: VerificationForgotPasswordComponent;
  let fixture: ComponentFixture<VerificationForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationForgotPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
