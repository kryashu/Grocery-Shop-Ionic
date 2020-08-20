import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.page.html',
  styleUrls: ['./create-card.page.scss'],
})
export class CreateCardPage implements OnInit {
  expirey;
  name;
  cardNumber;
  constructor(private router: Router,
              private location: Location,
              public toastController: ToastController) { }

  ngOnInit() {
  }
  cardformat(){
    if (((this.cardNumber.split(' ')[(this.cardNumber.split(' ').length) - 1].length) % 4) === 0 && this.cardNumber.length !== 19){
      this.cardNumber += ' ';
    }
  }
  formatDate(){
    if (this.expirey.length === 2){
      this.expirey += '/';
    }
  }
  add(){
    this.saved();
    this.router.navigate(['view-cards']);
  }
  async saved(){
    const toast = await this.toastController.create({
      message: 'Credit card added.',
      position: 'bottom',
      duration: 2000,
      cssClass: 'Toast'
    });
    await toast.present();
  }
}
