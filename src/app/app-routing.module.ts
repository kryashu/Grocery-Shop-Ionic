import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'sign',
    loadChildren: () => import('./sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'sign-with-mobile',
    loadChildren: () => import('./sign-with-mobile/sign-with-mobile.module').then( m => m.SignWithMobilePageModule)
  },
  {
    path: 'verify-otp',
    loadChildren: () => import('./verify-otp/verify-otp.module').then( m => m.VerifyOtpPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'view-all',
    loadChildren: () => import('./view-all/view-all.module').then( m => m.ViewAllPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'add-basket',
    loadChildren: () => import('./add-basket/add-basket.module').then( m => m.AddBasketPageModule)
  },
  {
    path: 'add-review',
    loadChildren: () => import('./add-review/add-review.module').then( m => m.AddReviewPageModule)
  },  {
    path: 'dialog-exit-app',
    loadChildren: () => import('./dialog-exit-app/dialog-exit-app.module').then( m => m.DialogExitAppPageModule)
  },
  {
    path: 'country-popup',
    loadChildren: () => import('./country-popup/country-popup.module').then( m => m.CountryPopupPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'new-address',
    loadChildren: () => import('./new-address/new-address.module').then( m => m.NewAddressPageModule)
  },
  {
    path: 'my-addresses',
    loadChildren: () => import('./my-addresses/my-addresses.module').then( m => m.MyAddressesPageModule)
  },
  {
    path: 'select-location',
    loadChildren: () => import('./select-location/select-location.module').then( m => m.SelectLocationPageModule)
  },
  {
    path: 'deliver-first',
    loadChildren: () => import('./deliver-first/deliver-first.module').then( m => m.DeliverFirstPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'where-deliver',
    loadChildren: () => import('./where-deliver/where-deliver.module').then( m => m.WhereDeliverPageModule)
  },
  {
    path: 'confirm-address',
    loadChildren: () => import('./confirm-address/confirm-address.module').then( m => m.ConfirmAddressPageModule)
  },
  {
    path: 'address-list',
    loadChildren: () => import('./address-list/address-list.module').then( m => m.AddressListPageModule)
  },
  {
    path: 'create-card',
    loadChildren: () => import('./create-card/create-card.module').then( m => m.CreateCardPageModule)
  },
  {
    path: 'view-cards',
    loadChildren: () => import('./view-cards/view-cards.module').then( m => m.ViewCardsPageModule)
  },
  {
    path: 'select-payment',
    loadChildren: () => import('./select-payment/select-payment.module').then( m => m.SelectPaymentPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
