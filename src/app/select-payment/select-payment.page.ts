import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.page.html',
  styleUrls: ['./select-payment.page.scss'],
})
export class SelectPaymentPage implements OnInit {
  methodList = [{name: 'Pick up myself' , isSelected: false}, {name: 'Cash on Delivery', isSelected: false}, {name: 'Pay with credit card', isSelected: false}];

  constructor(private router: Router,
              private location: Location) {
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  check(name) {
    for (const method of this.methodList) {
      if (name === method.name) {
        method.isSelected = true;
        if (name === 'Pay with credit card'){
          this.router.navigate(['view-cards']);
        }
      } else {
        method.isSelected = false;
      }
    }
  }
}
