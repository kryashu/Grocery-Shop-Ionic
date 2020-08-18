import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAddressesPageRoutingModule } from './my-addresses-routing.module';

import { MyAddressesPage } from './my-addresses.page';
import {TabsPageModule} from '../tabs/tabs.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyAddressesPageRoutingModule,
        TabsPageModule
    ],
  declarations: [MyAddressesPage]
})
export class MyAddressesPageModule {}
