import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { CreateUserComponent } from './modules/user/create-user/create-user.component';
import { FindUserComponent } from './modules/user/find-user/find-user.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
