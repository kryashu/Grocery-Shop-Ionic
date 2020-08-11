import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllPageRoutingModule } from './view-all-routing.module';

import { ViewAllPage } from './view-all.page';
import {TabsPageModule} from '../tabs/tabs.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewAllPageRoutingModule,
        TabsPageModule
    ],
  declarations: [ViewAllPage]
})
export class ViewAllPageModule {}
