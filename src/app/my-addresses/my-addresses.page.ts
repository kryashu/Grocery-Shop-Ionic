import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.page.html',
  styleUrls: ['./my-addresses.page.scss'],
})
export class MyAddressesPage implements OnInit {
  addressList = [{name: 'Home address', value: 'Piata Unirii 2, Apartment 23…', isSelected: false}, {
    name: 'Work address',
    value: 'No address added',
    isSelected: false
  }];
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
  check(name) {
    for (const address of this.addressList) {
      if (name === address.name) {
        address.isSelected = true;
      } else {
        address.isSelected = false;
      }
    }
  }

}
