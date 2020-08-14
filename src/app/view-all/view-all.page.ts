import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from "@angular/common";

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.page.html',
  styleUrls: ['./view-all.page.scss'],
})
export class ViewAllPage implements OnInit {
  offerList = [{img: './assets/pizza.png' , name: 'Basic Pizza' , subheading: '$,More Market', star: '4.8(120)', time: '60min', price: ' Free'}, {img: './assets/pizza.png' , name: 'Basic Pizza' , subheading: '$,More Market', star: '4.8(120)', time: '60min', price: ' Free'}, {img: './assets/pizza.png' , name: 'Basic Pizza' , subheading: '$,More Market', star: '4.8(120)', time: '60min', price: ' Free'}, {img: './assets/pizza.png' , name: 'Basic Pizza' , subheading: '$,More Market', star: '4.8(120)', time: '60min', price: ' Free'}, {img: './assets/pizza.png' , name: 'Basic Pizza' , subheading: '$,More Market', star: '4.8(120)', time: '60min', price: ' Free'}, {img: './assets/pizza.png' , name: 'Basic Pizza' , subheading: '$,More Market', star: '4.8(120)', time: '60min', price: ' Free'}];
  categoryList = [{img: './assets/bananas.webp', name: 'Fruits(24)'}, {img: './assets/bananas.webp', name: 'Vegetable(24)'}, {img: './assets/bananas.webp', name: 'Meat(24)'}];
  shopsList = [{img : './assets/shop.jpg', name: 'Basic Kneads Pizza', subheading: '$$$$,India', star: '4.8(120)', time: '60min', price: 'Free'}, {img : './assets/shop.jpg', name: 'Basic Kneads Pizza', subheading: '$$$$,India', star: '4.8(120)', time: '60min', price: 'Free'}, {img : './assets/shop.jpg', name: 'Basic Kneads Pizza', subheading: '$$$$,India', star: '4.8(120)', time: '60min', price: 'Free'}, {img : './assets/shop.jpg', name: 'Basic Kneads Pizza', subheading: '$$$$,India', star: '4.8(120)', time: '60min', price: 'Free'}];
  viewList;
  input;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private _location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.input = params.value;

    });
    this.selectView();
  }
  back() {
    this._location.back();
  }
selectView(){
    if (this.input === 'shops'){
      this.viewList = this.shopsList;
    }else if (this.input === 'categories'){
      this.viewList = this.categoryList;
    }else if (this.input === 'offers'){
      this.viewList = this.offerList;
    }
}
click(){
    if (this.input === 'offers'){
      this.router.navigate(['product']);
    }else if (this.input === 'shops'){
      this.router.navigate(['shop']);
    }
}
}
