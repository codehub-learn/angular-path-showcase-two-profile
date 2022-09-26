import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home.component";
import {ViewAllUsersComponent} from "./modules/view-all-users/view-all-users.component";
import {RegisterUserComponent} from "./modules/register-user/register-user.component";
import {NotFoundError} from "rxjs";
import {NotFoundErrorComponent} from "./core/not-found-error/not-found-error.component";
import {UserDetailsComponent} from "./modules/user-details/user-details.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "users",
    component: ViewAllUsersComponent
  },
  {
    path: "users/:id",
    component: UserDetailsComponent
  },
  {
    path: "registerUser",
    component: RegisterUserComponent
  },
  {
    path: "**",
    component: NotFoundErrorComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
