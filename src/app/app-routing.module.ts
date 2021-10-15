import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { GeolocationComponent } from './modules/geolocation/geolocation.component';
const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'geo',
      component: GeolocationComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'signup',
      component: SignupComponent,
    }]
  
  
  @NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }