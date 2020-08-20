import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.page.html',
  styleUrls: ['./create-card.page.scss'],
})
export class CreateCardPage implements OnInit {
  expirey;
  cardNumber;
  constructor(private location: Location) { }

  ngOnInit() {
  }
  cardformat(){
    if (((this.cardNumber.split(' ')[(this.cardNumber.split(' ').length) - 1].length) % 4) === 0 && this.cardNumber.length !== 19){
      this.cardNumber += ' ';
    }
  }
  formatDate(){
    if (this.expirey.length === 2){
      this.expirey += '/';
    }
  }
}
