import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm-address',
  templateUrl: './confirm-address.page.html',
  styleUrls: ['./confirm-address.page.scss'],
})
export class ConfirmAddressPage implements OnInit {
  loaderValue;
  constructor(private router: Router,) { }

  ngOnInit() {
    this.startTimer()
  }
  startTimer() {
    console.log('start');
    this.loaderValue = setTimeout(() => {
      // my to do
      this.router.navigate(['tabs', 'homepage']);
    }, 3000);

  }
}
