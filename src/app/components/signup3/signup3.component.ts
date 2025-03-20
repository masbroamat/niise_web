import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup3',
  imports: [RouterLink],
  templateUrl: './signup3.component.html',
  styleUrl: './signup3.component.css',
})
export class Signup3Component {}
personalDetailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalDetailForm = this.fb.group({
      fullName: [''],
      dob: [''],
      gender: ['Male'],
      nationality: [''],
      myKadNo: [''],
      address: [''],
      religion: [''],
      frontPhoto: [null],
      backPhoto: [null],
    });
  }

  onSubmit() {
    console.log(this.personalDetailForm.value);
  }

  onRetake() {
    this.personalDetailForm.reset();
  }
}
