import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http : HttpClient) { }

  checkJwtToken() : Observable<boolean> {

    return this.http.get<boolean>('http://localhost:3000/api/checkUser',{
      withCredentials : true,
    });

  }

  login(user : User):Observable<User>{

    return this.http.post<User>('http://localhost:3000/api/login',user,{withCredentials : true})
  }

  logout() : Observable<any>{

    return this.http.get<any>('http://localhost:3000/api/logout',{
      withCredentials : true,
    });

  }
}
