import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component';


const APP_ROUTES: Routes = [ /*Aca vamos agregando las rutas a los components */
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: SearchComponent},
  { path: '**', pathMatch: 'full',redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
