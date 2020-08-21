import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
home = '<Home Address>';
  constructor(private location: Location) { }
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
  back() {
    this.location.back();
  }

}
