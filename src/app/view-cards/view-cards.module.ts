import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCardsPageRoutingModule } from './view-cards-routing.module';

import { ViewCardsPage } from './view-cards.page';
import {TabsPageModule} from '../tabs/tabs.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewCardsPageRoutingModule,
        TabsPageModule
    ],
  declarations: [ViewCardsPage]
})
export class ViewCardsPageModule {}
