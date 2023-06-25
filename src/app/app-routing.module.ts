import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { AutorizadoFalseComponent } from './pages/autorizado-false/autorizado-false.component';
import { autorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  
  {path: '', component: HomeComponent,
  children:[
    {path: '', component: Page1Component},
    {path: 'page', component: Page1Component},
    

  ], canActivate: [autorizadoGuard]
},
  {path: '', component: AutorizadoFalseComponent,
  children:[
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},

  ]},

    
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
