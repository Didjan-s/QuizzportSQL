import { tap } from 'rxjs';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) =>{
  const router = inject(Router);
  const authService = inject(AuthService);
  

  return authService.checkJwtToken().pipe(
    tap(isValid=> {

        if(!isValid){
          router.navigate(['/login'])
        }
        
      }
    )
  )

};
