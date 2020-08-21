import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location, TitleCasePipe} from '@angular/common';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.page.html',
  styleUrls: ['./new-address.page.scss'],
})
export class NewAddressPage implements OnInit {
  input1 = 'Bulevardul Dimitrie Cantemir 49B';
  input2;
  input3;
  constructor(private router: Router,
              private location: Location,
              public toastController: ToastController,
              private titlecasePipe: TitleCasePipe) { }

  ngOnInit() {
  }
  transformName(){
    this.input3 = this.titlecasePipe.transform(this.input3);
    this.input2 = this.titlecasePipe.transform(this.input2);
    this.input1 = this.titlecasePipe.transform(this.input1);
  }

  saveAddress() {
    if (this.input1 === '' || this.input2 === '' || this.input3 === '' || this.input3 === undefined || this.input2 === undefined || this.input1 === undefined  ) {
    this.change();
    return false
    } else  {
      this,this.saved();
      this.router.navigate(['address-list']);
      return true
    }
  }
  async change(){
    const toast = await this.toastController.create({
      message: 'Please enter complete address.',
      duration: 2000,
      cssClass: 'Toast'
    });
    await toast.present();
  }
  async saved(){
    const toast = await this.toastController.create({
      message: 'Your address has been saved.',
      position: 'bottom',
      duration: 2000,
      cssClass: 'Toast'
    });
    await toast.present();
  }
}
