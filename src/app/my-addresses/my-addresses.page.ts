import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.page.html',
  styleUrls: ['./my-addresses.page.scss'],
})
export class MyAddressesPage implements OnInit {
  address;
  isChecked;
  isCheckedName;
  constructor(private router: Router,
              private location: Location) { }

  ngOnInit() {
  }

  back() {
    this.location.back()
  }
  check(e) {
    this.isChecked = !this.isChecked;
    this.isCheckedName = e.target.name;
  }

}
