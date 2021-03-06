import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
// tslint:disable-next-line:max-line-length
  fistList = [{item: 'Dairy Milk Silk', subdel: 'Lorem Ipsum'}, {item: 'Dairy Milk Silk', subdel: 'Lorem Ipsum'}, {
    item: 'Dairy Milk Silk',
    subdel: 'Lorem Ipsum'
  }];
  ssecondList = [{item: 'Dairy Milk', subdel: 'Lorem Ipsum'}, {item: 'Dairy Milk', subdel: 'Lorem Ipsum'}, {
    item: 'Dairy Milk',
    subdel: 'Lorem Ipsum'
  }];
  viewList;
  bevFlag = true;
  conFlag = false;
  bevFlag1 = false;

  // tslint:disable-next-line:variable-name
  constructor(private _location: Location) {
    this.viewList = this.fistList;
  }

  ngOnInit() {
  }

  productShow(cat) {
    if (cat === 'Bevrages') {
      this.conFlag = false;
      this.bevFlag = true;
      this.bevFlag1 = false;
      this.viewList = this.fistList;
    } else if (cat === 'con') {
      this.conFlag = true;
      this.bevFlag = false;
      this.bevFlag1 = false;
      this.viewList = this.ssecondList;
    } else if (cat === 'Bevrages1') {
      this.conFlag = false;
      this.bevFlag = false;
      this.bevFlag1 = true;
      this.viewList = this.fistList;
    }

  }
  back() {
    this._location.back();
  }
}
