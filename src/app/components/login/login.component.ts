import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  selectedTab: string = 'malaysian'; 

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      ic: [''],
      password: ['']
    });
  }

  setTab(tab: string) {
    this.selectedTab = tab; 
  }

  login() {
    console.log(this.loginForm.value);
  }
}
