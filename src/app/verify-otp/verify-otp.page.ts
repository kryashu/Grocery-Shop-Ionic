import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {
  phoneNumber;
  firstD;
  secondD;
  thirdD;
  fourthD;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.phoneNumber = params.phone;
  });
  }
verify() {
      console.log(this.firstD , this.secondD ,this.thirdD , this.fourthD);
      if (this.firstD + this.secondD + this.thirdD + this.fourthD === '1111'){
            this.router.navigate(['/homepage']);
        }
        else if (this.firstD === 'undefined' || this.secondD === undefined ||this.thirdD === undefined || this.fourthD === undefined) {
            return;
        }
        else {
            alert('wrong otp');
      }
    }
}

