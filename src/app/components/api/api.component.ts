import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, RouterLink, CommonModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent {
  companyList: any[] = [];
  
  constructor(private http: HttpClient) {}

  getCompanies() {
    this.http.get("https://json-placeholder.mock.beeceptor.com/companies").subscribe((result: any) => {
      this.companyList = result;
    });
  }
}