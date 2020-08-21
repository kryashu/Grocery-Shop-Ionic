import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  back() {
    this._location.back();
  }
}
