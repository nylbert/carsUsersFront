import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { SigninComponent } from './signin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    FormsModule,
    MessagesModule,
    CommonModule
  ]
})
export class SigninModule { }
