import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    DetailUserComponent
  ],
  imports: [
    TableModule,
    CommonModule
  ]
})
export class AccountModule { }
