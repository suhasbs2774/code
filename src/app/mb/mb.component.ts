import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mb',
  standalone: true,
  templateUrl: './mb.component.html',
  styleUrls: ['./mb.component.css'],
  imports: [CommonModule, FormsModule],
})
export class MbComponent {
  bookings = [
    {
      id: 1,
      customerName: 'Rahul Sharma',
      serviceType: 'Car Wash',
      address: '123 Main Street, City',
      date: '13/02/25',
      time: '10:30 AM',
      status: 'Pending'
    },
    {
      id: 2,
      customerName: 'Sneha Patel',
      serviceType: 'Pet Grooming',
      address: '456 Pet Lane, Town',
      date: '20/02/25',
      time: '12:00 PM',
      status: 'Pending'
    },
    {
      id: 3,
      customerName: 'Arjun Verma',
      serviceType: 'Tank Cleaning',
      address: '789 Waterway Avenue, Metro',
      date: '2/03/25',
      time: '3:00 PM',
      status: 'Pending'
    }
  ];

  acceptBooking(booking: any) {
    booking.status = 'Accepted';
    alert('Booking has been accepted.');
  }

  rejectBooking(booking: any) {
    booking.status = 'Rejected';
    alert('Booking has been rejected.');
  }
}