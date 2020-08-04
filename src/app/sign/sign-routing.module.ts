import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignPage } from './sign.page';


// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: SignPage,
      children: [],
  },

    {
        path: 'signin',
        loadChildren: () => import('../signin/signin.module').then( m => m.SigninPageModule),
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignPageRoutingModule {}