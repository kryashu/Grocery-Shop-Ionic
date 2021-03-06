import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBasketPageRoutingModule } from './add-basket-routing.module';

import { AddBasketPage } from './add-basket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBasketPageRoutingModule
  ],
  declarations: [AddBasketPage]
})
export class AddBasketPageModule {}
