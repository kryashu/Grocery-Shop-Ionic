import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogExitAppPageRoutingModule } from './dialog-exit-app-routing.module';

import { DialogExitAppPage } from './dialog-exit-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogExitAppPageRoutingModule
  ],
  declarations: [DialogExitAppPage]
})
export class DialogExitAppPageModule {}
