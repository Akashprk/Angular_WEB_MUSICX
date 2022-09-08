import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ServicesComponent } from './services/services.component';

import { AboutusComponent } from './about-us/aboutus.component';



const routes: Routes = [

  {path:'home',component:HomeComponent},

  {path:'about-us',component:AboutusComponent},

  {path:'services',component:ServicesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
