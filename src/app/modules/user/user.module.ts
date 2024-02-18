import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PipesModule } from 'src/app/pipes/pipe.module';
import { FindUserComponent } from './find-user/find-user.component';
import { RouterModule } from '@angular/router';

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    ListUserComponent,
    CreateUserComponent,
    FindUserComponent,
  ],
  imports: [
    RouterModule,
    PipesModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    TableModule,
    DialogModule,
    CommonModule
  ]
})
export class UserModule { }
