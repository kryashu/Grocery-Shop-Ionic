import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogExitAppPage } from './dialog-exit-app.page';

const routes: Routes = [
  {
    path: '',
    component: DialogExitAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogExitAppPageRoutingModule {}
