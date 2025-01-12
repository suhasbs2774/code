import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  displaySideBar = true;
  editUserForm = false;

  servicess = ['Car Service', 'Bike Service', 'Pet Grooming', 'Gardening', 'Sofa Cleaning'];
  expiryOptions = ['30 Minutes', '1 Hour', '2 Hours'];
  post = {
    service: '',
    address: '',
    description: '',
    expiry: '',
    file: null
  };
  user={ name:'Test Customer Name',
    phone:'+91 34344444',
    email:'test@gmail.com',
    address:'Mysore, Karnataka',
    pin:'343-433',
    age:34,
    dob:new Date()};
  successMessage = '';

  temperatures = [
    { name: 'Temperatura Sala', value: 20.7, trend: 80 },
    { name: 'Temperatura Studio', value: 20.7, trend: 70 },
    { name: 'Temperatura Camera 1', value: 19.5, trend: 60 },
    { name: 'Temperatura Camera 2', value: 19.8, trend: 50 },
  ];

  taskSummary = [
    {
      title: 'Car Service',
      description: 'High-quality car washing and polishing service.',
      image: 'assets/car-service.jpg',
      review: 5
    },
    {
      title: 'Bike Service',
      description: 'Quick and efficient bike servicing with doorstep pickup.',
      image: 'assets/bike-service.jpg',
      review: 4
    },
    {
      title: 'Gardening',
      description: 'Professional gardening service for a beautiful backyard.',
      image: 'assets/gardening.jpg',
      review: 4
    }
  ];

  services = [
    {
      name: 'Car Wash',
      image: '../../../assets/images/service1.jpg',
      shops: [
        { name: 'Car Cleaners', price: '₹500' },
        { name: 'Auto Spa', price: '₹750' },
        { name: 'Shine & Drive', price: '₹600' },
        { name: 'SpeedWash', price: '₹450' },
        { name: 'Eco Car Wash', price: '₹550' }
      ]
    },
    {
      name: 'Bike Service',
      image: '../../../assets/images/service2(bike).jpg',
      shops: [
        { name: 'Bike Care', price: '₹400' },
        { name: 'SpeedFix', price: '₹350' },
        { name: 'Moto Mechanics', price: '₹500' },
        { name: 'QuickBike Services', price: '₹450' },
        { name: 'Rev & Ride', price: '₹550' }
      ]
    },
    {
      name: 'Aquarium Setup',
      image: '../../../assets/images/service4(aquarium).jpg',
      shops: [
        { name: 'Aqua World', price: '₹1500' },
        { name: 'Fish Haven', price: '₹1200' },
        { name: 'Ocean Bliss', price: '₹1800' },
        { name: 'AquaScape Designers', price: '₹2000' },
        { name: 'Marine Magic', price: '₹1600' }
      ]
    },
    {
      name: 'Pet Care',
      image: '../../../assets/images/service3(pet).jpg',
      shops: [
        { name: 'Pet Paradise', price: '₹700' },
        { name: 'Animal Love', price: '₹800' },
        { name: 'Furry Friends Care', price: '₹750' },
        { name: 'Happy Tails Center', price: '₹650' },
        { name: 'Paws & Claws', price: '₹900' }
      ]
    },
    {
      name: 'Gardening',
      image: '../../../assets/images/garden.jpg',
      shops: [
        { name: 'Green Thumbs', price: '₹1200' },
        { name: 'Garden Pro', price: '₹1500' },
        { name: 'BloomScape', price: '₹1000' },
        { name: 'Nature\'s Touch', price: '₹1100' },
        { name: 'Garden Delights', price: '₹1400' }
      ]
    }
  ];
  selectedService: any = null;
  bookedService: any = null;
  paymentMethod: string = '';
  finalConfirmation: boolean = false;
  isLoading: boolean = false;


  constructor(private router: Router) { 
  }

  scrollTo(sectionId: HTMLElement): void {

    sectionId.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly

  }


  selectService(service: any) {
    this.selectedService = service;
    this.bookedService = null;
  }

  bookService(shop: any) {
    this.bookedService = { service: this.selectedService, shop };
    this.selectedService = null;
  }

  selectShop(shop: any) {
    this.bookedService = {
      service: this.selectedService,
      shop: shop
    };
  }

  selectPayment(method: string) {
    this.paymentMethod = method;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = true;
      this.finalConfirmation = true;
      this.finalConfirmation = true;
    }, 200);
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    this.post.file = file;
  }

  postAd() {
    if (this.post.service && this.post.address && this.post.description && this.post.expiry) {
      this.successMessage = 'Ad posted successfully!';
      console.log('Ad Details:', this.post);
      // Reset form after posting
      this.post = {
        service: '',
        address: '',
        description: '',
        expiry: '',
        file: null
      };
    } else {
      this.successMessage = 'Please fill out all fields!';
    }
  }
  navigateToHome() {
    location.href = '#';
  }
  editUser() {
    this.editUserForm = true;
  }
  updateUser() {
    this.editUserForm = false;
  }
}