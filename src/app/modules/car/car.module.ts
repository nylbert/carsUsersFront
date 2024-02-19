import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CreateCarComponent } from './create-car/create-car.component';
import { FindCarComponent } from './find-car/find-car.component';
import { ListCarComponent } from './list-car/list-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';


@NgModule({
  declarations: [
    CreateCarComponent,
    FindCarComponent,
    ListCarComponent,
    UpdateCarComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    TableModule,
    DialogModule,
    CommonModule
  ]
})
export class CarModule { }
