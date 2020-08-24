import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.page.html',
  styleUrls: ['./edit-card.page.scss'],
})
export class EditCardPage implements OnInit {
  expirey;
  name;
  cardNumber;
  customPickerOptions: any;
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
      message: 'Credit card edited successfully',
      position: 'bottom',
      duration: 2000,
      cssClass: 'Toast'
    });
    await toast.present();
  }
  date() {
    this.customPickerOptions = {
      cssClass: 'datepicker',
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
}

}
