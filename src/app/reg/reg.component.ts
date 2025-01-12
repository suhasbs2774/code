import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  standalone: false,
  
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {
email='';
 constructor(private router:Router) {
  console.log(router)
 }
 gotoDashboard() {
  this.router.navigate(['/dashboard']);  // define your component where you want to go
 }
 gotoVendor() {
  this.router.navigate(['/vendor']);  // define your component where you want to go
 }
}
