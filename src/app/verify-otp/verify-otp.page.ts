import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

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
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.phoneNumber = params.phone;
  });
  }
verify() {
      console.log(this.firstD , this.secondD , this.thirdD , this.fourthD);
      if (this.firstD + this.secondD + this.thirdD + this.fourthD === '1111'){
            this.router.navigate(['/homepage']);
        }
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

