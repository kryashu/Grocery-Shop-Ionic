import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-basket',
  templateUrl: './add-basket.page.html',
  styleUrls: ['./add-basket.page.scss'],
})
export class AddBasketPage implements OnInit {
  itemCount = 0;
  selectedItem;
  totalPrice = 0;
  itemList = [{name: '24cm(1 person)', count: 0, price: 4.50}, {name: '32cm(2-3 persons)', count: 0, price: 6.50}, {name: '40cm(3-4 persons)', count: 0, price: 6.50}];
  constructor(private router: Router,
              public modalController: ModalController,
              private toaster: ToastController) { }

  ngOnInit() {
  }
  async presentToast() {
    const toast = await this.toaster.create({
      message: 'Please select an item.',
      color: 'danger',
      cssClass: 'toaster',
      duration: 2000
    });
    toast.present();
  }
  add(){
    if (this.selectedItem){
    for (const item of this.itemList){
      if (item.name === this.selectedItem){
        item.count += 1;
        this.totalPrice += item.price;
        this.itemCount += 1;
      }
    }}else{
        this.presentToast();
    }
  }
  remove(){
    if (this.selectedItem){
    for (const item of this.itemList){
      if (item.name === this.selectedItem){
        if (item.count > 0) {
          item.count -= 1;
          if (this.totalPrice > 0){
            this.totalPrice -= item.price;
          }
          if (this.itemCount > 0){
            this.itemCount -= 1;
          }
        }
      }
    }}else{
      this.presentToast();
    }
  }
  submit(){

      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
        dismissed: true
      });

      this.router.navigate(['shopping-bag']);
  }
}
