import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishlistTabPageRoutingModule } from './wishlist-tab-routing.module';

import { WishlistTabPage } from './wishlist-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishlistTabPageRoutingModule
  ],
  declarations: [WishlistTabPage]
})
export class WishlistTabPageModule {}
