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
  add(name){
    this.selectedItem = name;
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
  remove(name){
    this.selectedItem = name;
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

      this.router.navigate(['tabs', 'cart-tab']);
  }
  addZeroes(num) {
// Convert input string to a number and store as a variable.
    let value = Number(num);
// Split the input string into two arrays containing integers/decimals
    const res = num.split('.');
// If there is no decimal point or only one decimal place found.
    if (res.length === 1 || res[1].length < 3) {
// Set the number to two decimal places
      // @ts-ignore
      value = value.toFixed(2);
    }
// Return updated or original number.
    return value;
  }
}
