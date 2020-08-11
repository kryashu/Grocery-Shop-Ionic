import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.page.html',
  styleUrls: ['./shopping-bag.page.scss'],
})
export class ShoppingBagPage implements OnInit {
  // tslint:disable-next-line:max-line-length
  itemList = [{name: 'MDH Masala', quantity: '200 gms', originalPrice: '$19.50' , discountedPrice: 17.00, count: 1 }, {name: 'Chunky Chat Masala', quantity: '500 gms', originalPrice: '$19.50' , discountedPrice: 16.00, count: 1 }];
  totalValue = '$33.00';
  discount = '$3.00';
  total = '$30.00';
  constructor() { }

  ngOnInit() {
  }

}
