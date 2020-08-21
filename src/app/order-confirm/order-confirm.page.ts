import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.page.html',
  styleUrls: ['./order-confirm.page.scss'],
})
export class OrderConfirmPage implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit() {
  }
  back() {
    this.location.back();
  }
}
