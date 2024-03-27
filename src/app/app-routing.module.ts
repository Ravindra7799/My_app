import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsComponent } from './products/products.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { OrdersComponent } from './orders/orders.component';
import { CarsComponent } from './cars/cars.component';
import { MailComponent } from './mail/mail.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { CreateCarsComponent } from './create-cars/create-cars.component';
import { CreteAccountComponent } from './crete-account/crete-account.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:'login', component: LoginComponent}, //canActivate:[AuthenticationGuard],
  {path:'dashboard', component: DashboardComponent, children:[
    {path:'', component: HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'products', component:ProductsComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'cars', component:CarsComponent},
    {path:'mail', component:MailComponent},
    {path:'dynamic', component:DynamicComponent},
    {path:'create-cars', component: CreateCarsComponent},
    {path:'create-account', component: CreteAccountComponent},
    {path:'create-user', component: CreateUserComponent},


  ]},
  {path:'', component: LoginComponent},
  {path:'orders', component: OrdersComponent},
  {path:'**', component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
