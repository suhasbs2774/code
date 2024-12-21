import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 constructor(private router:Router) {}
 gotoHome() {
  this.router.navigate(['/home']);  // define your component where you want to go
 }

}
