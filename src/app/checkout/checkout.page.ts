import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private router: Router,
              private location: Location) { }
  itemList = [{
    name: 'MDH Masala',
    quantity: '200 gms',
    originalPrice: `19.50`,
    discount: 2.50,
    discountedPrice: 17.00,
    count: 1
  }, {name: 'Chunky Chat Masala', quantity: '500 gms', originalPrice: '19.50', discount: 3.50, discountedPrice: 16.00, count: 1}];
  ngOnInit() {
  }

}
