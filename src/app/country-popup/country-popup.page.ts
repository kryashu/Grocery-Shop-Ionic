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
  viewList: any;
  searchInput;
  constructor(public modalController: ModalController) {
      this.viewList = this.countryList;
  }

  ngOnInit() {
  }
select(data){
    this.modalController.dismiss(data);
}
search(){
    const searched = [];
    this.countryList.forEach(country => {
        // tslint:disable-next-line:max-line-length
      if (country.name.toLowerCase().substring(0, this.searchInput.length) === this.searchInput.toLowerCase() || country.alpha2Code.toLowerCase().substring(0, this.searchInput.length) === this.searchInput.toLowerCase() || country.alpha3Code.toLowerCase().substring(0, this.searchInput.length) === this.searchInput.toLowerCase()){
        searched.push(country);
      }
      this.viewList = searched;

    });
}
}
