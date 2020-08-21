import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.page.html',
  styleUrls: ['./view-cards.page.scss'],
})
export class ViewCardsPage implements OnInit {
  cardList = [{name: 'Mastercard - 06/23', value: '•••• •••• •••• 4432', isSelected: false}, {
    name: 'Visa - 08/22',
    value: '•••• •••• •••• 4561',
    isSelected: false
  },  {
    name: 'Revolut: 09/23',
    value: '•••• •••• •••• 4561',
    isSelected: false
  }];

  constructor(private router: Router,
              private location: Location,
              public alertController: AlertController) {
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  check(name, event) {
    if (event.target.checked) {
      this.proceedAlert();
    }
    for (const card of this.cardList) {
      if (name === card.name) {
        card.isSelected = true;
      } else {
        card.isSelected = false;
      }
    }

  }
  async proceedAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alertCancel',
      header: 'Are you sure!',
      message: 'You want to use this card',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['checkout']);
          }
        }
      ]
    });

    await alert.present();
  }
  delete(name){
    for (const card of this.cardList) {
      if (name === card.name) {
        this.cardList.splice(this.cardList.indexOf(card),1);
      } else {
        card.isSelected = false;
      }
    }
  }
  async deleteAlert(name) {
    const alert = await this.alertController.create({
      cssClass: 'alertCancel',
      header: 'Are you sure!',
      message: 'You want to remove this card?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.delete(name);
          }
        }
      ]
    });

    await alert.present();
  }
}
