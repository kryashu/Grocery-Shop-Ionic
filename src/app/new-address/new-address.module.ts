import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAddressPageRoutingModule } from './new-address-routing.module';

import { NewAddressPage } from './new-address.page';
import {TabsPageModule} from '../tabs/tabs.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewAddressPageRoutingModule,
        TabsPageModule
    ],
  declarations: [NewAddressPage]
})
export class NewAddressPageModule {}
