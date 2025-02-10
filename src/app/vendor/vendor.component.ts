import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-vendor',
  standalone: true,
  
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css',
  imports: [CommonModule, FormsModule],
})
export class VendorComponent {

  
    constructor(private router:Router) {
          console.log(router)
         }
         gotoJobListings() {
          this.router.navigate(['/job-listings']);  // define your component where you want to go
         }
}
