import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Keyboard} from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {
  phoneNumber;
  firstD = '.';
  secondD = '.';
  thirdD = '.';
  fourthD = '.';
  warningFlag = false;
  style;
  textFlag = true;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private keyboard: Keyboard) {
      this.keyboard.onKeyboardHide().subscribe(evemt => {
          this.textFlag = true;
      });
  }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.phoneNumber = params.phone;
  });
  }
    moveFocus(nextElement, position, event) {
        this.textFlag = false;
        console.log(event.target.value);
        if (position === 1 && event.target.value !== ''){
            this.secondD = undefined;
            nextElement.setFocus();
        }else if (position === 2 && event.target.value !== ''){
            this.thirdD = undefined;
            nextElement.setFocus();
        }else if (position === 3 && event.target.value !== ''){
            this.fourthD = undefined;
            nextElement.setFocus();
        }
    }
verify() {
      if (this.firstD + this.secondD + this.thirdD + this.fourthD === '1111'){
            this.router.navigate(['tabs', 'homepage']);
        }
      // tslint:disable-next-line:max-line-length
        else if (this.firstD === undefined || this.secondD === undefined || this.thirdD === undefined || this.fourthD === undefined || this.firstD === '.' || this.secondD === '.' || this.thirdD === '.' || this.fourthD === '.') {
            return;
        }
        else {
            this.warningFlag = true;
            this.style = {
                borderColor: '#FF2650',
                color: '#FF2650'
            };
      }
    }
    clear(position){
      this.textFlag = false;
      if (position === 1){
          this.firstD = undefined;
      }else if (position === 2){
          this.secondD = undefined;
      }else if (position === 3){
          this.thirdD = undefined;
      }
      else if (position === 4){
          this.fourthD = undefined;
      }
    }
}

