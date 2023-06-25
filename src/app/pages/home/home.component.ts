import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

constructor(private route: ActivatedRoute, private router: Router){}

  goToPage1(){
    this.router.navigate(['page'])
  }
  goToPage2(){
    this.router.navigate(['page2'])
  }
  sair(){
    
    window.localStorage.removeItem('token')
    this.router.navigate(['login'])
    
    
    
  }
}
