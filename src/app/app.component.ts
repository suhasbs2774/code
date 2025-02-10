import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ViewChild} from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'Wave Wash';
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  isMobile=false;
  displayHeaderFooter=true;
  isCollapsed = false;

  constructor(
    private observer: BreakpointObserver,
    private route: Router
  ) {
    // BreakpointObserver logic
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
    });

    // Router events logic
    this.route.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        console.log(data);
        if (data.url.includes('login') || data.url.includes('dashboard') || data.url.includes('reg') || data.url.includes('card1') || data.url.includes('card2') || data.url.includes('card3') || data.url.includes('card4') || data.url.includes('card5') || data.url.includes('card6') || data.url.includes('card7') || data.url.includes('card8') || data.url.includes('ureg') || data.url.includes('cbot') || data.url.includes('vendor') || data.url.includes('job-listings')) {
          this.displayHeaderFooter = false;
        }
        
      }
    });
  }

  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false; // Toggle sidenav on mobile devices
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
      // Do nothing for now
    }
  }

  toogleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
}