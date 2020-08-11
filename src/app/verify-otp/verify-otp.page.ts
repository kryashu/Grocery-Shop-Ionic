import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Keyboard} from '@ionic-native/keyboard/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {
    @ViewChildren('formRow') rows: any;
  phoneNumber;
  firstD ;
  secondD ;
  thirdD ;
  fourthD ;
  resendText = 'Text message resent.';
  resendFlag = false;
  resendFlag1 = false;
  counter = 15;
  timerValue = '15';
  warningFlag = false;
  style;
  backspaceWave = 0;
  textFlag = true;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private keyboard: Keyboard,
              public actionSheetController: ActionSheetController) {
      this.keyboard.onKeyboardShow().subscribe(() => {
          this.textFlag = false;
      });
      this.keyboard.onKeyboardHide().subscribe(() => {
          this.textFlag = true;
      });
  }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.phoneNumber = params.phone;

  });
  }
  back(){
      this.router.navigate(['/sign-with-mobile']);
  }
  timer(bool){
      if (bool){
      this.resendFlag = true;
      const interval =  setInterval(() => {
          this.counter -= 1;
          if (this.counter < 0){
              this.resendText = 'Resend OTP';
              this.resendFlag = false;
              this.counter = 15;
              this.timerValue = '15';
              clearInterval(interval);
              return;
          }else if (this.counter < 10){
              this.resendText = 'Text message resent.';
              this.timerValue = '0' + this.counter.toString();
          }else {
              this.resendText = 'Text message resent.';
              this.timerValue = this.counter.toString();
          }
      }, 1000);
      }
  }
    moveFocus(nextElement, prevElement, position, event) {
        // let pos = position;
        // if (event.keyCode === 8 && event.which === 8) {
        //     pos = position - 1 ;
        // } else {
        //     pos = position + 1 ;
        // }
        // if (pos > -1 && pos < 4 ) {
        //     this.rows._results[pos].setFocus();
        // }
        this.textFlag = false;
        if (event.target.value !== ''){
            this.backspaceWave = 1;
            nextElement.setFocus();
            if (position === 4){
                this.backspaceWave = 0;
            }
        }
        if (event.key === 'Backspace' && this.backspaceWave === 0){
            this.backspaceWave += 1;
            this.warningFlag = false;
            this.style = undefined;
        }else if (event.key === 'Backspace' && this.backspaceWave === 1){
            // prevElement.setFocus();
            // this.backspaceWave -= 1;
            if (position === 3 && (this.thirdD === undefined || this.thirdD === '')){
                prevElement.setFocus();
            }else if (position === 2 && (this.secondD === undefined || this.secondD === '')){
                prevElement.setFocus();
            }else {
                prevElement.setFocus();
                this.backspaceWave -= 1;
            }
        }

  }

verify() {
      if (this.firstD + this.secondD + this.thirdD + this.fourthD === '1111'){
               this.router.navigate(['user-details']);
            // this.router.navigate(['tabs', 'homepage']);
        }
      // tslint:disable-next-line:max-line-length
        else if (this.firstD === undefined || this.secondD === undefined || this.thirdD === undefined || this.fourthD === undefined || this.firstD === '' || this.secondD === '' || this.thirdD === '' || this.fourthD === '') {
          this.warningFlag = false;
          this.style = undefined;
        }
        else {
            this.warningFlag = true;
            this.style = {
                borderColor: '#FF2650',
                color: '#FF2650'
            };
      }
    }
    clear(data){
      if (data === undefined || data === '') {
          this.backspaceWave = 1;
      }else {
          this.backspaceWave = 0;
      }
      this.textFlag = false;
    }
    public async showActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Is this your correct phone number?',
            subHeader: this.phoneNumber,
            cssClass: 'header',
            buttons: [{
                text: 'Yes, resend code by SMS',
                cssClass: 'prime',
                handler: () => {
                    this.resendFlag1 = true;
                    this.resendFlag = true;
                    this.timer(true);
                }
            }, {
                text: 'No, I want to change it',
                cssClass: 'sec',
                handler: () => {
                    this.router.navigate(['/sign-with-mobile']);
                }
            }]
        });
        await actionSheet.present();
    }
}

