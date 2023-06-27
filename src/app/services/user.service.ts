import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class userService   {

  BASE_URL: string = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.BASE_URL + 'users',httpOptions)
    
  }



}
