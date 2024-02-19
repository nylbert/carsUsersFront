import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { CreateUserComponent } from './modules/user/create-user/create-user.component';
import { FindUserComponent } from './modules/user/find-user/find-user.component';
import { UpdateUserComponent } from './modules/user/update-user/update-user.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { SigninComponent } from './modules/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listUsers',
    pathMatch: 'full'
  },
  {
    path: 'listUsers',
    component: ListUserComponent
  },
  {
    path: 'createUser',
    component: CreateUserComponent
  },
  {
    path: 'findUser/:id',
    component: FindUserComponent
  },
  {
    path: 'updateUser/:id',
    component: UpdateUserComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'createCar',
    component: CreateUserComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
