import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  quickAccessItems = [
    { image: '/images/E-Pass.jpg', title: 'E-Pass' },
    { image: '/images/DigitalLandingCard(DLC).png', title: 'Digital Landing Card (DLC)', route: '/dlc' }, // Added route
    { image: '/images/CustomDeclaration.png', title: 'Custom Declaration' },
    { image: '/images/SSPI.jpg', title: 'SSPI' },
    { image: '/images/MyBorderPass.jpg', title: 'MyBorder Pass' }
  ];
}

