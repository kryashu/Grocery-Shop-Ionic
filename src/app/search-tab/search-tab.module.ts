import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchTabPageRoutingModule } from './search-tab-routing.module';

import { SearchTabPage } from './search-tab.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchTabPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAClE7_4DBppqt1JDCG_21LQ2qWMXHFNaw',
      libraries: ['places']
    })
  ],
  declarations: [SearchTabPage]
})
export class SearchTabPageModule {}
