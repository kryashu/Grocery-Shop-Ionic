import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Platform } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sign-with-mobile',
  templateUrl: './sign-with-mobile.page.html',
  styleUrls: ['./sign-with-mobile.page.scss'],
})
export class SignWithMobilePage implements OnInit {
  countryList;
  amd = '+91';
  buttonFlag = true;
  phoneNumber ;
  warningFlag = false;
  constructor(private platform: Platform,
              private router: Router,
              private http: HttpClient) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.buttonFlag = true;
    });
  }

  ngOnInit() {
  this.getCountryData();
  }
  getCountryData(){
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(reply => {
      console.log(reply);
      this.countryList = reply;
    });
  }
clear(){
    this.buttonFlag = false;
    this.phoneNumber = undefined;
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
}
