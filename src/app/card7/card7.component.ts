import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card7',
  standalone: true,
  templateUrl: './card7.component.html',
  styleUrls: ['./card7.component.css'],
  imports: [CommonModule, FormsModule],
})
export class Card7Component {
  location: string = '';
  services: any[] = [];
  bookingSubmitted: boolean = false;
  selectedService: any = null; // Selected service for details view
  showBookingForm: boolean = false; // Toggles the booking form visibility
  bookingData: any = {
    address: '',
    description: '',
    image: null,
  };

  // Mock data
  allServices = [
    { name: 'Clean Wash Center', description: 'Quick and affordable washing services.', address: 'Vijayanagar, Mysore' },
    { name: 'Clean Wash Center', description: 'Quick and affordable washing services.', address: 'Vijayanagar, Mysore' },{ name: 'Green Gardeners', description: 'Gardening expert', address: 'Vijayanagar, Mysore' },{ name: 'Fast and furious clean', description: 'Quick and affordable washing services.', address: 'Vijayanagar, Mysore' },{ name: 'Sai wash', description: 'Quick and affordable washing services.', address: 'Vijayanagar, Mysore' },
    { name: 'Fresh Laundry Hub', description: 'Eco-friendly and reliable service.', address: 'Gokulam, Mysore' },
    { name: 'Speedy Wash', description: 'Fast and efficient laundry solutions.', address: 'Saraswathipuram, Mysore' },
    { name: 'Premium Laundry Services', description: 'Professional-grade fabric care.', address: 'Jayalakshmipuram, Mysore' },
    { name: 'Eco Wash Point', description: 'Environmentally conscious washing.', address: 'Hebbal, Mysore' },
    { name: 'Budget Cleaners', description: 'Affordable washing for daily needs.', address: 'Lakshmipuram, Mysore' },
    { name: 'Laundry Pro', description: 'High-quality, same-day services.', address: 'Ramakrishna Nagar, Mysore' },
    { name: 'Quick Clean Hub', description: 'Efficient and cost-effective washing.', address: 'Kuvempu Nagar, Mysore' },
    { name: 'Royal Laundry Service', description: 'Exclusive cleaning for delicate fabrics.', address: 'Chamundipuram, Mysore' },
    { name: 'Bright Wash Co.', description: 'High-performance washing with advanced techniques.', address: 'Metagalli, Mysore' },
    { name: 'Smart Wash Experts', description: 'Reliable services at affordable prices.', address: 'Hunsur Road, Mysore' },
    { name: 'Urban Wash', description: 'Quick pickups and deliveries for urban areas.', address: 'Vidyaranyapuram, Mysore' },
    { name: 'Elite Laundry Care', description: 'Specialized in premium fabric care.', address: 'Ashokapuram, Mysore' },
    { name: 'Nature Wash', description: 'Eco-friendly washing solutions.', address: 'Yadavagiri, Mysore' },
    { name: 'Express Wash Co.', description: 'Lightning-fast services for busy professionals.', address: 'Nanjangud Road, Mysore' },
    { name: 'Fresh & Clean Laundry', description: 'Affordable family laundry packages.', address: 'Narayan Shastry Road, Mysore' },
    { name: 'Sandalwood Wash Center', description: 'Known for premium service and care.', address: 'Agrahara, Mysore' },
    { name: 'Star Laundry', description: 'Perfect for households and small businesses.', address: 'Tilaknagar, Mysore' },
    { name: 'Classic Laundry Services', description: 'Premium and reliable solutions.', address: 'Krishnamurthypuram, Mysore' },
    { name: 'Safe Wash Solutions', description: 'Trusted service for delicate items.', address: 'Mandi Mohalla, Mysore' },
    { name: 'Family Wash Services', description: 'Designed for families with bulk laundry needs.', address: 'Bannimantap, Mysore' },
    { name: '24x7 Wash Experts', description: 'Round-the-clock laundry services.', address: 'Lashkar Mohalla, Mysore' },
    { name: 'Perfect Wash Co.', description: 'Your go-to service for spotless laundry.', address: 'Rajarajeshwari Nagar, Mysore' },
    { name: 'Heritage Laundry', description: 'Experience top-quality service in a heritage setting.', address: 'Mysore Palace Area, Mysore' },
    { name: 'Metro Wash Hub', description: 'Modern laundry for urban lifestyles.', address: 'Jayaprakash Nagar, Mysore' },
  ];


  fetchServices() {
    if (this.location) {
      this.services = this.allServices.filter((service) =>
        service.address.toLowerCase().includes(this.location.toLowerCase())
      );
    } else {
      this.services = [];
    }
  }

  clearSearch() {
    this.location = '';
    this.services = [];
  }

  viewDetails(service: any) {
    this.selectedService = service;
    this.showBookingForm = false; // Hide the booking form if previously open
    this.bookingSubmitted = false;
  }

  closeDetails() {
    this.selectedService = null;
    this.showBookingForm = false;
    this.bookingSubmitted = false;
  }

  openBookingForm() {
    this.showBookingForm = true;
  }

  closeBookingForm() {
    this.showBookingForm = false;
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.bookingData.image = file;
    }
  }

  submitBooking() {
    console.log('Booking Data:', this.bookingData);
    this.bookingSubmitted = true; // Show confirmation message
    this.showBookingForm = false; // Hide the booking form
  }

  closeConfirmation() {
    this.bookingSubmitted = false; // Hide the confirmation message
    this.bookingData = { address: '', description: '', image: null }; // Reset form
  }

  constructor(private router:Router) {
        console.log(router)
       }
       gotoLogin() {
        this.router.navigate(['/login']);  // define your component where you want to go
       }
}