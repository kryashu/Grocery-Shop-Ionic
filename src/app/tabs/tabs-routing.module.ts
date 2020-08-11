import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'homepage',
        children: [
          {
            path: '',
            loadChildren: () => import('../homepage/homepage.module').then( m => m.HomepagePageModule)
          }
        ]
      },
      {
        path: 'wishlist-tab',
        children: [
          {
            path: '',
            loadChildren: () => import('../wishlist-tab/wishlist-tab.module').then( m => m.WishlistTabPageModule)
          }
        ]
      },
      {
        path: 'search-tab',
        children: [
          {
            path: '',
            loadChildren: () => import('../search-tab/search-tab.module').then( m => m.SearchTabPageModule)
          }
        ]
      },
      {
        path: 'cart-tab',
        children: [
          {
            path: '',
            loadChildren: () => import('../cart-tab/cart-tab.module').then( m => m.CartTabPageModule)
          }
        ]
      },
      {
        path: 'profile-tab',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile-tab/profile-tab.module').then( m => m.ProfileTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
