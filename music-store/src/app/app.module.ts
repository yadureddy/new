import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompleteComponent } from './complete/complete.component';
import { AuthguardService } from './authguard.service';


const appRoutes : Routes = [
  {path : "", component : HomeComponent},
  {path : "store", component : StoreComponent},
  {path : "cart", component : CartComponent},
  {path : "admin", component : AdminComponent, canActivate : [AuthguardService]},
  {path : "login", component : LoginComponent},
  {path : "browse/:id", component : BrowseComponent},
  {path : "details/:id", component : DetailsComponent},
  {path : "checkout", component : CheckoutComponent},
  {path : "complete", component : CompleteComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    StoreComponent,
    CartComponent,
    LoginComponent,
    BrowseComponent,
    DetailsComponent,
    CheckoutComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
