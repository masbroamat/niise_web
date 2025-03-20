import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Standalone Component
  imports: [RouterOutlet, RouterLink, CommonModule], // ✅ Import CommonModule to fix ngClass error
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isSidebarOpen = false;

  // Fix: Define dropdowns with an index signature
  dropdowns: { [key: string]: boolean } = {
    quickAccess: false,
    latestNews: false,
  };

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleDropdown(section: string) {
      this.dropdowns[section] = !this.dropdowns[section];
  }

  isForgotPasswordPage(): boolean {
    return this.router.url === '/forgotpassword';
  }

  isVerificationForgotPasswordPage(): boolean {
    return this.router.url === '/verificationforgotpassword';
  }
}
