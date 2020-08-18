import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.page.html',
  styleUrls: ['./new-address.page.scss'],
})
export class NewAddressPage implements OnInit {
  input1 = 'Bulevardul Dimitrie Cantemir 49B';
  constructor() { }

  ngOnInit() {
  }

}
