import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wave Wash';
  displayHeaderFooter=true;
  constructor(private route:Router) {
    route.events.subscribe(data=>{
      if(data instanceof NavigationEnd) {
        console.log(data);
        if(data?.url.includes('login')) {
          this.displayHeaderFooter=false;
        }
      }
    })
  }
}