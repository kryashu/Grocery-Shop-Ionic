import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-wishlist-tab',
  templateUrl: './wishlist-tab.page.html',
  styleUrls: ['./wishlist-tab.page.scss'],
})
export class WishlistTabPage implements OnInit {
  // tslint:disable-next-line:max-line-length
  wishlist = [{name: 'MDH Masala', amount: '250', price: 19.50, discountedPrice: 17.00}, {name: 'MDH Masala', amount: '250', price: 19.50, discountedPrice: 17.00}, {name: 'MDH Masala', amount: '250', price: 19.50, discountedPrice: 17.00}];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  addZeroes(num) {
// Convert input string to a number and store as a variable.
    let value = Number(num);
// Split the input string into two arrays containing integers/decimals
    const res = num.split('.');
// If there is no decimal point or only one decimal place found.
    if (res.length === 1 || res[1].length < 3) {
// Set the number to two decimal places
      // @ts-ignore
      value = value.toFixed(2);
    }
// Return updated or original number.
    return value;
  }
  delete(){
    this.wishlist.pop();
  }

}
