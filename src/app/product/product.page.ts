import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import {AddBasketPage} from '../add-basket/add-basket.page';
import {Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  reviewList = [{name: 'Mike Smithson', country: 'Australia', count: '45', star: '4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', content2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}, {name: 'Angela Williams', country: 'France', count: '23', star: '5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}];
  constructor(public modalController: ModalController,
              private router: Router,
              private _location: Location,
              ) {
  }

  ngOnInit() {
  }
  back() {
    this._location.back();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddBasketPage,
      cssClass: 'addModal',
    });
    return await modal.present();
  }
  async close() {
    await this.modalController.dismiss();
  }
  clickBack(){
    this.close();
    this.router.navigate(['tabs', 'homepage']);
  }
}
