import { userService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrash, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  faTrash = faTrash;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  isIconClicked: boolean = false;
  

 


  constructor(private router: Router, private userService: userService,) {}
  ngOnInit(): void {
   
  }


  onSubmit(): void {
    const usuario = (<HTMLInputElement>document.getElementById('emailValue')).value 
    const password = (<HTMLInputElement>document.getElementById('password')).value 
    alert("a")
    this.userService.getUsers().subscribe(
      (users: User[])=> {
        const logged = users.find(user => user.email === usuario && user.password === password);
        if(logged){
          this.login()
          console.log("logado");
          
        }else{
          console.log("acesso errado");
          
        }
      }
    );
  }

  login() {
    window.localStorage.setItem('token', 'meu-token');
    this.router.navigate(['']);
    console.log(window.localStorage.getItem('token'));
  }

  treshValue(){
    (<HTMLInputElement>document.getElementById('emailValue')).value = ''
  }

  eyePassword(){
    this.isIconClicked = !this.isIconClicked;
    
    if (this.isIconClicked ) {
      this.faEyeSlash = faEye ;
      (<HTMLInputElement>document.getElementById('password')).type = 'text';
    } else {
      this.faEyeSlash = faEyeSlash;
      (<HTMLInputElement>document.getElementById('password')).type = 'password';
      
    }
    
  }
}
