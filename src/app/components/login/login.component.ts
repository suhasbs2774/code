import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email='';
 constructor(private router:Router) {
  console.log(router)
 }
 gotoDashboard() {
  this.router.navigate(['/dashboard']);  // define your component where you want to go
 }
 gotoReg() {
  this.router.navigate(['/reg']);
 }
 gotoVendor() {
  this.router.navigate(['/vendor']);
 }

}