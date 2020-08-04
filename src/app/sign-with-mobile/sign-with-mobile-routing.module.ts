import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignWithMobilePage } from './sign-with-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: SignWithMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignWithMobilePageRoutingModule {}
