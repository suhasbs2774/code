import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router) {}
  scrollTo(sectionId: HTMLElement): void {
   
    sectionId.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly
  }
  navigateToLogin(){
    this.router.navigate(['/login']);  // define your component where you want to go
  }
}