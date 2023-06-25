import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router){}
  teste(){
    
    alert('Ola, Mundo!!!!')
    this.login() 
  }

  login() {
    window.localStorage.setItem('token','meu-token');
    this.router.navigate([''])

    console.log(window.localStorage.getItem('token'));
    
    
    
  }

}
