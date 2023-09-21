import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { QuizzViewComponent } from './views/quizz-view/quizz-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    HomeViewComponent,
    QuizzViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
