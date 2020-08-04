import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignWithMobilePageRoutingModule } from './sign-with-mobile-routing.module';

import { SignWithMobilePage } from './sign-with-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignWithMobilePageRoutingModule
  ],
  declarations: [SignWithMobilePage]
})
export class SignWithMobilePageModule {}
