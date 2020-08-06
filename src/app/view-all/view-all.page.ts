import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.input = params.value;

    });
    this.selectView();
  }
selectView(){
    if (this.input === 'shop'){
      this.viewList = this.shopsList;
    }else if (this.input === 'category'){
      this.viewList = this.categoryList;
    }else if (this.input === 'offer'){
      this.viewList = this.offerList;
    }
}
}
