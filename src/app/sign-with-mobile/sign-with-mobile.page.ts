import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Platform } from '@ionic/angular';
import {CountryCode} from './country-code.constant';

@Component({
  selector: 'app-sign-with-mobile',
  templateUrl: './sign-with-mobile.page.html',
  styleUrls: ['./sign-with-mobile.page.scss'],
})
export class SignWithMobilePage implements OnInit {
  countryList = CountryCode.countryCode;
  amd = '+91';
  buttonFlag = true;
  phoneNumber ;
  warningFlag = false;
  constructor(private platform: Platform,
              private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.buttonFlag = true;
    });
  }

  ngOnInit() {
  }

clear(){
    this.buttonFlag = false;
    this.warningFlag = false;
}
changeFlag(){
    this.buttonFlag = true;
}
click(){
    if (this.phoneNumber.length <= 4 || this.phoneNumber.length >= 14){
      this.warningFlag = true;
    }else {
      this.router.navigate(['/verify-otp', {phone: this.amd + this.phoneNumber}]);
    }
}
changeflag(){this.warningFlag = false;

}
}
