import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css'],
  imports: [CommonModule, FormsModule],
})
export class JobListingsComponent {
  jobListings = [
    {
      id: 1,
      serviceType: 'Car Wash - Sedan',
      address: '123 Street, City, State',
      description: 'Customer needs a full sedan wash including waxing.',
      image: '../../../assets/images/c1.jpg',
      bidAmount: null
    },
    {
      id: 2,
      serviceType: 'Pet Wash',
      address: '456 Avenue, City, State',
      description: 'Wash and groom a Golden Retriever.',
      image: '../../../assets/images/c2.jpg',
      bidAmount: null
    },
    {
      id: 3,
      serviceType: 'Aquarium Cleaning',
      address: '789 Boulevard, City, State',
      description: 'Cleaning a 50-gallon fish tank.',
      image: '../../../assets/images/d2.jpg',
      bidAmount: null
    }
  ];

  placeBid(job: any) {
    if (job.bidAmount && job.bidAmount > 0) {
      alert('Bid placed');
    } else {
      alert('Please enter a valid bid amount.');
    }
  }
}