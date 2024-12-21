import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  temperatures = [
    { name: 'Temperatura Sala', value: 20.7, trend: 80 },
    { name: 'Temperatura Studio', value: 20.7, trend: 70 },
    { name: 'Temperatura Camera 1', value: 19.5, trend: 60 },
    { name: 'Temperatura Camera 2', value: 19.8, trend: 50 },
  ];

}
