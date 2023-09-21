import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { QuizzViewComponent } from './views/quizz-view/quizz-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path : 'home',component : HomeViewComponent,canActivate : [authGuard]},
  {path : 'quizz',component : QuizzViewComponent,canActivate : [authGuard]},
  {path : 'login',component : LoginViewComponent},
  {path : '**', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
