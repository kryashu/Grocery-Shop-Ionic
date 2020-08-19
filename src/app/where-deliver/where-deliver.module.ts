import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhereDeliverPageRoutingModule } from './where-deliver-routing.module';

import { WhereDeliverPage } from './where-deliver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhereDeliverPageRoutingModule
  ],
  declarations: [WhereDeliverPage]
})
export class WhereDeliverPageModule {}
