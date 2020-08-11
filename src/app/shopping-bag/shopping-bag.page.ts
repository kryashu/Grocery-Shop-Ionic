import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.page.html',
  styleUrls: ['./shopping-bag.page.scss'],
})
export class ShoppingBagPage implements OnInit {
  // tslint:disable-next-line:max-line-length
  itemList = [{name: 'MDH Masala', quantity: '200 gms', originalPrice: '$19.50' , discount: 2.50, discountedPrice: 17.00, count: 1 }, {name: 'Chunky Chat Masala', quantity: '500 gms', originalPrice: '$19.50' , discount: 3.50, discountedPrice: 16.00, count: 1 }];
  totalValue = '$33.00';
  discount = '$3.00';
  discountValue = 0;
  total = 0;
  constructor() { }

  ngOnInit() {
    for (const item of this.itemList) {
      this.total += item.discountedPrice;
      this.discountValue += item.discount;
    }
    this.discount = '$' + this.addZeroes(this.discountValue.toString()).toString();
    this.totalValue = '$' + this.addZeroes(this.total.toString()).toString();
  }
add(name){
  for (const item of this.itemList){
    if (item.name === name){
      item.count += 1;
      this.total += item.discountedPrice;
      this.discountValue += item.discount;
      this.discount = '$' + this.addZeroes(this.discountValue.toString()).toString();
      this.totalValue = '$' + this.addZeroes(this.total.toString()).toString();
    }
  }
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
  remove(name){
    for (const item of this.itemList){
      if (item.name === name){
        if (item.count > 1) {
          item.count -= 1;
          if (this.total > 0){
            this.total -= item.discountedPrice;
            this.discountValue -= item.discount;
          }
        }else if (item.count === 1){
          this.itemList.splice(this.itemList.indexOf(item), 1);
        }
      }
    }
    this.discount = '$' + this.addZeroes(this.discountValue.toString()).toString();
    this.totalValue = '$' + this.addZeroes(this.total.toString()).toString();
  }
}