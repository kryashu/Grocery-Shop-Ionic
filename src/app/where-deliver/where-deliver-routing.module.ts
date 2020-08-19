import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhereDeliverPage } from './where-deliver.page';

const routes: Routes = [
  {
    path: '',
    component: WhereDeliverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhereDeliverPageRoutingModule {}
