import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryPopupPage } from './country-popup.page';

const routes: Routes = [
  {
    path: '',
    component: CountryPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryPopupPageRoutingModule {}
