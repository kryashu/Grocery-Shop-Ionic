import { Component, OnInit } from '@angular/core';
import {CountryCode} from '../sign-with-mobile/country-code.constant';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-country-popup',
  templateUrl: './country-popup.page.html',
  styleUrls: ['./country-popup.page.scss'],
})
export class CountryPopupPage implements OnInit {
  countryList = CountryCode.countryCode;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
select(data){
    this.modalController.dismiss(data);
}
}
