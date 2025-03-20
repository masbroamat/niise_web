import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  passwordForm: FormGroup;

  @ViewChild('passwordField') passwordField!: ElementRef;
  @ViewChild('togglePassword') togglePassword!: ElementRef;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.togglePassword.nativeElement.addEventListener("click", () => {
      if (this.passwordField.nativeElement.type === "password") {
        this.passwordField.nativeElement.type = "text";
        this.togglePassword.nativeElement.classList.remove("fa-eye");
        this.togglePassword.nativeElement.classList.add("fa-eye-slash");
      } else {
        this.passwordField.nativeElement.type = "password";
        this.togglePassword.nativeElement.classList.remove("fa-eye-slash");
        this.togglePassword.nativeElement.classList.add("fa-eye");
      }
    });
  }

  checkPasswords() {
    const { newPassword, confirmPassword } = this.passwordForm.value;
    if (newPassword !== confirmPassword) {
      this.passwordForm.controls['confirmPassword'].setErrors({ mismatch: true });
    } else {
      this.passwordForm.controls['confirmPassword'].setErrors(null);
    }
  }
}
