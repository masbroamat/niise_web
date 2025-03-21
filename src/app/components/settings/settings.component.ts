import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  togglePassword(inputId: string, event: Event) {
    const inputField = document.getElementById(inputId) as HTMLInputElement;
    const target = event.target as HTMLElement;
    const imgElement = target.tagName === 'IMG' ? target : target.querySelector('img');

    if (inputField.type === 'password') {
      inputField.type = 'text';
      imgElement?.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/709/709612.png'); // Eye open icon
    } else {
      inputField.type = 'password';
      imgElement?.setAttribute('src', 'https://cdn-icons-png.flaticon.com/128/2767/2767146.png'); // Eye closed icon
    }
  }
  
}
