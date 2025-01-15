import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ureg',
  standalone: false,
  
  templateUrl: './ureg.component.html',
  styleUrl: './ureg.component.css'
})
export class UregComponent {
email='';
 constructor(private router:Router) {
  console.log(router)
 }
 gotoDashboard() {
  this.router.navigate(['/dashboard']);  // define your component where you want to go
 }

}
