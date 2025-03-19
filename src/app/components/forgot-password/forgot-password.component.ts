import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  isEmailSelected: boolean = true;

  email: string | null = null;
  phone: number | null = null;

  constructor(private router: Router) {}

  changeOption() {
    this.isEmailSelected = !this.isEmailSelected;
  }

  onSubmit(form: any) {
    if (form.valid) {
      const navigationExtras = {
        state: {
          email: this.isEmailSelected ? this.email : null,
          phone: !this.isEmailSelected ? this.phone : null,
        },
      };
      this.router.navigate(['/verificationforgotpassword'], navigationExtras);
    } else if (this.isEmailSelected) {
      alert('Enter the correct email format. eg. email@gmail.com');
    } else if (!this.isEmailSelected) {
      alert('Enter the correct phone number format. eg. 60123456789');
    }
  }
}
