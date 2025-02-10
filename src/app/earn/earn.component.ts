import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-earn',
  standalone: true,
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.css'],
  imports: [CommonModule, FormsModule],
})
export class EarnComponent {
  totalEarnings = 50000; // Example earnings
  pendingPayments = 10000;
  completedServices = 120;

  transactions = [
    { date: '2025-02-10', service: 'Car Wash', amount: 500, status: 'Completed' },
    { date: '2025-02-09', service: 'Bike Wash', amount: 300, status: 'Completed' },
    { date: '2025-02-08', service: 'Tank Wash', amount: 800, status: 'Pending' }
  ];

  requestPayment() {
    alert('Payment request sent successfully!');
    // Here, you can integrate an API call to request earnings from the admin.
  }
}