import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule} from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { VendorComponent } from './vendor/vendor.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card1Component } from './card1/card1.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { Card7Component } from './card7/card7.component';
import { Card8Component } from './card8/card8.component';
import { UregComponent } from './ureg/ureg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    RegComponent,
    VendorComponent,
    Card2Component,
    Card3Component,
    Card1Component,
    Card4Component,
    Card5Component,
    Card6Component,
    Card7Component,
    Card8Component,
    UregComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
  
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,

  ],
  providers: [
    
    provideAnimationsAsync(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
