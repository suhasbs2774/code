import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegComponent } from './/reg/reg.component';
import { VendorComponent } from './vendor/vendor.component';
const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  {path: 'dashboard',component: DashboardComponent},
  {path: 'reg',component: RegComponent},
  {path: 'vendor',component: VendorComponent},
  {path: '',redirectTo: '/login',pathMatch: 'full'}  // Add the new route

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
