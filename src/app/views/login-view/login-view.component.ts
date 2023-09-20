import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  loginMessage : string | undefined


  loginForm = new FormGroup({
    pseudo : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  },Validators.required)

  constructor(){

  }

  onLogin(){
    
    if(this.loginForm.valid){

      const user : User = {
        email : 'mail',
        ticket : 'ticket',
        firstName : '',
        lastName : ''
      }    
  
      // this.authService.login(user).subscribe({
      //   next : () => {

      //   }
      //   }
      // )
    }else{
      this.loginMessage = "Form not valid"
    }

  }
}
