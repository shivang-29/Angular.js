import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import{AboutComponent} from './about/about.component';
import{LoginComponent} from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
//to do: remove header and footer and provide a default route
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
  },
  // {
  //   path: 'header',
  //   component: HeaderComponent
  // },

  // {
  //   path: 'footer',
  //   component: FooterComponent
  // },
  
  {
    path: 'home',
    component: HomeComponent
  }


];


@NgModule
({imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
