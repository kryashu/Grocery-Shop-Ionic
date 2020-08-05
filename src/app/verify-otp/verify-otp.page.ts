import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Keyboard} from '@ionic-native/keyboard/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {
  phoneNumber;
  firstD ;
  secondD ;
  thirdD ;
  fourthD ;
  warningFlag = false;
  style;
  backspaceWave = 0;
  textFlag = true;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private keyboard: Keyboard,
              public actionSheetController: ActionSheetController) {
      this.keyboard.onKeyboardHide().subscribe(() => {
          this.textFlag = true;
      });
  }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.phoneNumber = params.phone;
  });
  }
    moveFocus(nextElement, prevElement, position, event) {
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
            prevElement.setFocus();
            this.backspaceWave -= 1;
        }
  }

verify() {
      if (this.firstD + this.secondD + this.thirdD + this.fourthD === '1111'){
            this.router.navigate(['tabs', 'homepage']);
        }
      // tslint:disable-next-line:max-line-length
        else if (this.firstD === undefined || this.secondD === undefined || this.thirdD === undefined || this.fourthD === undefined || this.firstD === '' || this.secondD === '' || this.thirdD === '' || this.fourthD === '') {
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
    clear(){
        this.backspaceWave = 1;
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
                    console.log(this.phoneNumber);
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

