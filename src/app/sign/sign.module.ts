import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignPageRoutingModule } from './sign-routing.module';

import { SignPage } from './sign.page';
import {SigninPage} from "../signin/signin.page";
import {SigninPageModule} from "../signin/signin.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignPageRoutingModule,
      SigninPageModule
  ],
  declarations: [SignPage]
})
export class SignPageModule {}
