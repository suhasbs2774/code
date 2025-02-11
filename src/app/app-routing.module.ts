import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegComponent } from './/reg/reg.component';
import { VendorComponent } from './vendor/vendor.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { Card7Component } from './card7/card7.component';
import { Card8Component } from './card8/card8.component';
import { UregComponent } from './ureg/ureg.component';
import { CbotComponent } from './cbot/cbot.component';
import { HelppComponent } from './helpp/helpp.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { MbComponent } from './mb/mb.component';
import { SdComponent } from './sd/sd.component';
import { EarnComponent } from './earn/earn.component';
import { Chatbot2Component } from './chatbot2/chatbot2.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  {path: 'dashboard',component: DashboardComponent},
  {path: 'reg',component: RegComponent},
  {path: 'vendor',component: VendorComponent},
  {path: 'card1',component: Card1Component},
  {path: 'card2',component: Card2Component},
  {path: 'card3',component: Card3Component},
  {path: 'card4',component: Card4Component},
  {path: 'card5',component: Card5Component},
  {path: 'card6',component: Card6Component},
  {path: 'card7',component: Card7Component},
  {path: 'card8',component: Card8Component},
  {path: 'ureg',component: UregComponent},
  {path: 'cbot',component: CbotComponent},
  {path: 'job-listings',component: JobListingsComponent},
  {path: 'helpp',component: HelppComponent},
  {path: 'mb',component: MbComponent},
  {path: 'sd',component: SdComponent},
  {path: 'earn',component: EarnComponent},
  {path: 'chatbot2',component: Chatbot2Component},
  {path: '',redirectTo: '/login',pathMatch: 'full'}  // Add the new route

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
