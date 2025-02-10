import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sd',
  standalone: true,
  templateUrl: './sd.component.html',
  styleUrls: ['./sd.component.css'],
  imports: [CommonModule, FormsModule],
})
export class SdComponent {
  Math = Math;
  serviceHistory = [
    {
      serviceType: 'Car Wash',
      customerName: 'Rahul Sharma',
      date: '2024-02-05',
      rating: 4.5,
      review: 'Great service! The car looks brand new.',
    },
    {
      serviceType: 'Pet Grooming',
      customerName: 'Sneha Patel',
      date: '2024-02-03',
      rating: 5,
      review: 'Very professional and friendly. My dog loved it!',
    },
    {
      serviceType: 'Tank Cleaning',
      customerName: 'Arjun Verma',
      date: '2024-01-30',
      rating: 4,
      review: 'Good job, but arrived a bit late.',
    },
    {
      serviceType: 'Aquarium Cleaning',
      customerName: 'Neha Kapoor',
      date: '2024-01-28',
      rating: 5,
      review: 'Amazing work! My aquarium looks crystal clear now.',
    }
  ];
}