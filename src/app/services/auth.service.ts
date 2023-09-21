import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new User
  constructor(private http : HttpClient) { }

  login(user : User){

    return this.http.post<User>('http://localhost:3000/api/login',user,{withCredentials : true})
  }
}
