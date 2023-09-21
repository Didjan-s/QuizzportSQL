import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { QuizzViewComponent } from './views/quizz-view/quizz-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ProfilComponent } from './views/profil-view/profil.component';

const routes: Routes = [
  {path : 'home',component : HomeViewComponent},
  {path : 'quizz',component : QuizzViewComponent},
  {path : 'login',component : LoginViewComponent},
  {path : 'profil/:id',component : ProfilComponent},
  {path : '**', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
