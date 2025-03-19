import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Standalone Component
  imports: [CommonModule], // ✅ Import CommonModule to fix ngClass error
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isSidebarOpen = false;
  
  // Fix: Define dropdowns with an index signature
  dropdowns: { [key: string]: boolean } = {
    quickAccess: false,
    latestNews: false
  };

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleDropdown(section: string) {
    if (this.dropdowns.hasOwnProperty(section)) {
      this.dropdowns[section] = !this.dropdowns[section];
    }
  }
}
