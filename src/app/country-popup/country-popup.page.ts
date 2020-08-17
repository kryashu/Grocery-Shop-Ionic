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
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.viewList = this.countryList;
  }
select(data){
    this.modalController.dismiss(data);
}
search(){
    const searched = [];
    this.countryList.forEach(country => {
      if (country.name.toLowerCase().substring(0, this.searchInput.length) === this.searchInput.toLowerCase() || country.alpha2Code.toLowerCase().substring(0, this.searchInput.length) === this.searchInput.toLowerCase() || country.alpha3Code.toLowerCase().substring(0, this.searchInput.length) === this.searchInput.toLowerCase()){
        searched.push(country);
      }
      if (searched.length !== 0){
        this.viewList = searched;
      }else {
        this.viewList = this.countryList;
      }
    });
}
}
