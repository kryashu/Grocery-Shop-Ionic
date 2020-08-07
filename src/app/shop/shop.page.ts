import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
fistList = [{item: 'Dairy Milk Silk', subdel: 'Lorem Ipsum'}, {item: 'Dairy Milk Silk', subdel: 'Lorem Ipsum'}, {item: 'Dairy Milk Silk', subdel: 'Lorem Ipsum'}]
  ssecondList = [{item: 'Dairy Milk', subdel: 'Lorem Ipsum'}, {item: 'Dairy Milk', subdel: 'Lorem Ipsum'}, {item: 'Dairy Milk', subdel: 'Lorem Ipsum'}]
  viewList;
color
  constructor() {
    this.viewList = this.fistList
  }

  ngOnInit() {
  }

  productShow(cat) {
    if (cat === 'Bevrages') {
      this.viewList = this.fistList;
    } else if (cat === 'con') {
      this.viewList = this.ssecondList;
    }
  }

}
