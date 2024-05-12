import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddPhoneNumberComponent } from './component/add-phone-number/add-phone-number.component';
import { SearchPhoneNumberComponent } from './component/search-phone-number/search-phone-number.component';
import { HeaderComponent } from './component/header/header.component';
import { PhoneNumberComponent } from './component/phone-number/phone-number.component';
import { ListPhoneNumberComponent } from './component/list-phone-number/list-phone-number.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: PhoneNumberComponent }];


@NgModule({
  declarations: [
    AddPhoneNumberComponent,
    SearchPhoneNumberComponent,
    HeaderComponent,
    PhoneNumberComponent,
    ListPhoneNumberComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),

  ]
})
export class PhoneBookModule { }
