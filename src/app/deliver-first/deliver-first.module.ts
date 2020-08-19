import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliverFirstPageRoutingModule } from './deliver-first-routing.module';

import { DeliverFirstPage } from './deliver-first.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliverFirstPageRoutingModule
  ],
  declarations: [DeliverFirstPage]
})
export class DeliverFirstPageModule {}
