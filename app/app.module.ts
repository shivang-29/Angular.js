import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
//to do: check the implementations for routes const(if not needed remove it)
const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
   },
  {    path: 'user',
  component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
