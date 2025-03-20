import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verification-forgot-password',
  imports: [RouterLink, FormsModule],
  templateUrl: './verification-forgot-password.component.html',
  styleUrl: './verification-forgot-password.component.css',
})
export class VerificationForgotPasswordComponent {
  email: string | null = null;
  phone: number | null = null;
  inputOTPs: any;
  isResent: boolean = false;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      email: string | null;
      phone: number | null;
    };
    this.email = state?.email ?? null;
    this.phone = state?.phone ?? null;
  }

  otp1: string = '';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';

  onSubmit(form: any): void {
    if (form.valid) {
      const otp = [this.otp1, this.otp2, this.otp3, this.otp4]
        .map((val) => (val != null ? val.toString() : ''))
        .join('');
      console.log('OTP is:', otp);
      this.router.navigate(['/setnewpassword'], {
        state: { otp },
      });
      // Proceed with further OTP verification...
    }
  }

  limitDigits(event: any): void {
    const input = event.target;
    if (input.value && input.value.toString().length > 1) {
      input.value = input.value.toString().slice(0, 1);
    }
  }

  notificationLabel() {
    this.isResent = true;
    setTimeout(() => {
      this.isResent = false;
    }, 2000);
  }
}
