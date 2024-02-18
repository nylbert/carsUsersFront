import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    DateFormatPipe,
    ListUserComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
