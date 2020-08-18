import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CountryCode} from './country-code.constant';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import {ModalController} from '@ionic/angular';
import {CountryPopupPage} from '../country-popup/country-popup.page';

@Component({
  selector: 'app-sign-with-mobile',
  templateUrl: './sign-with-mobile.page.html',
  styleUrls: ['./sign-with-mobile.page.scss'],
})
export class SignWithMobilePage implements OnInit {
  country = CountryCode.countryCode[104];
  amd = '+' + this.country.callingCodes[0];
  buttonFlag = true;
  phoneNumber ;
  warningFlag = false;
  constructor(private router: Router,
              private keyboard: Keyboard,
              public modalController: ModalController) {
      this.keyboard.onKeyboardShow().subscribe(() => {
          this.buttonFlag = false;
      });
      this.keyboard.onKeyboardHide().subscribe(() => {
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

async openModal(){
      const modal = await this.modalController.create({
          component: CountryPopupPage,
          backdropDismiss: true,
      });
      await modal.present();
      const data = await modal.onWillDismiss();
      if (data.data) {
          this.country = data.data;
          this.amd = '+' + data.data.callingCodes[0];
      }
}
    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
