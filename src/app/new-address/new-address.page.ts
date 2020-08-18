import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.page.html',
  styleUrls: ['./new-address.page.scss'],
})
export class NewAddressPage implements OnInit {
  input1 = 'Bulevardul Dimitrie Cantemir 49B';
  constructor(private router: Router,
              private location: Location) { }

  ngOnInit() {
  }
}
