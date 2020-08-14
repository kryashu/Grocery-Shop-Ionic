import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryPopupPageRoutingModule } from './country-popup-routing.module';

import { CountryPopupPage } from './country-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryPopupPageRoutingModule
  ],
  declarations: [CountryPopupPage]
})
export class CountryPopupPageModule {}
