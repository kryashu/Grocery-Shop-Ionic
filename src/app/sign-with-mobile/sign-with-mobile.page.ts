import { Component, OnInit } from '@angular/core';
import {CountryCode} from './country-code.constant';

@Component({
  selector: 'app-sign-with-mobile',
  templateUrl: './sign-with-mobile.page.html',
  styleUrls: ['./sign-with-mobile.page.scss'],
})
export class SignWithMobilePage implements OnInit {
  countryList = CountryCode.countryCode;
  amd = '+91';
  phoneNumber = 'Enter Your Phone Number';
  constructor() { }

  ngOnInit() {
  }
clear(){
    this.phoneNumber = undefined;
}
}
