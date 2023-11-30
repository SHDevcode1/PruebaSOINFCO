import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { error } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit {
  users: any[] = []; // Declaro propiedad users 

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      //Asigna datos obtenidos a users
      (data: any[]) => { 
        this.users = data;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
