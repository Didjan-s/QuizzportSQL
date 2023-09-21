import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  loginMessage : string | undefined


  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    ticket : new FormControl('',Validators.required)
  },Validators.required)

  constructor(private authService : AuthService){

  }

  onLogin(){
    
    if(this.loginForm.valid){

      const user : User = {
        email : this.loginForm.value.email,
        ticket : this.loginForm.value.ticket,
        firstName : '',
        lastName : ''
      }    
  
      this.authService.login(user).subscribe({
        next : (user) => {
          this.authService.user = user
          console.log("connected");
          
        },
        error : (err)=> {
          console.log(err);
          
        }
        }
      )
    }else{
      this.loginMessage = "Form not valid"
    }

  }
}
