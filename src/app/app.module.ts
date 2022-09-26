import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./core/header/header.component";
import {FooterComponent} from "./core/footer/footer.component";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './modules/home/home.component';
import { ViewAllUsersComponent } from './modules/view-all-users/view-all-users.component';
import { RegisterUserComponent } from './modules/register-user/register-user.component';
import {AppRoutingModule} from "./app-routing.module";
import { NotFoundErrorComponent } from './core/not-found-error/not-found-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ViewAllUsersComponent,
    RegisterUserComponent,
    NotFoundErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
