import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ToursComponent } from './modules/tours/tours.component';
import { BestOffersComponent } from './modules/best-offers/best-offers.component';
import { TestimonialsComponent } from './modules/testimonials/testimonials.component';
import { TrendingComponent } from './modules/trending/trending.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CtaComponent } from './modules/cta/cta.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { RatingModule } from 'ng-starrating';
import { GeolocationComponent } from './modules/geolocation/geolocation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ToursComponent,
    BestOffersComponent,
    TestimonialsComponent,
    TrendingComponent,
    ContactComponent,
    CtaComponent,
    LoginComponent,
    SignupComponent,
    GeolocationComponent
  ],
  imports: [
    RatingModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
