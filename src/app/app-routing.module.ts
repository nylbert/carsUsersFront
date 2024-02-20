import { FindCarComponent } from './modules/car/find-car/find-car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { CreateUserComponent } from './modules/user/create-user/create-user.component';
import { FindUserComponent } from './modules/user/find-user/find-user.component';
import { UpdateUserComponent } from './modules/user/update-user/update-user.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { SigninComponent } from './modules/signin/signin.component';
import { ListCarComponent } from './modules/car/list-car/list-car.component';
import { CreateCarComponent } from './modules/car/create-car/create-car.component';
import { UpdateCarComponent } from './modules/car/update-car/update-car.component';
import { DetailUserComponent } from './modules/account/detail-user/detail-user.component';

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
    path: 'listCars',
    component: ListCarComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'createCar',
    component: CreateCarComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'findCar/:id',
    component: FindCarComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'updateCar/:id',
    component: UpdateCarComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'detailUser',
    component: DetailUserComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
