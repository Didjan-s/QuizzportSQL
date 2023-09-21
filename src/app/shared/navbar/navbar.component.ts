import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(public authService : AuthService, private router : Router){

  }

  logout(){
    this.authService.logout().subscribe(
      {
        next : (res) => {
          console.log('res');
          
          this.router.navigate(['login'])
        },
        error : (err) => {
          console.log(err);
          
        }
      }
    );
  }

}
