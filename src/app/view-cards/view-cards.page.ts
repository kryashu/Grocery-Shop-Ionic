import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.page.html',
  styleUrls: ['./view-cards.page.scss'],
})
export class ViewCardsPage implements OnInit {
  cardList = [{name: 'Mastercard - 06/23', value: '•••• •••• •••• 4432', isSelected: false}, {
    name: 'Visa - 08/22',
    value: '•••• •••• •••• 4561',
    isSelected: false
  },  {
    name: 'Revolut: 09/23',
    value: '•••• •••• •••• 4561',
    isSelected: false
  }];

  constructor(private router: Router,
              private location: Location) {
  }

  ngOnInit() {
  }

  back() {
    this.location.back()
  }

  check(name) {
    for (const card of this.cardList) {
      if (name === card.name) {
        card.isSelected = true;
      } else {
        card.isSelected = false;
      }
    }

  }
  delete(name){
    for (const card of this.cardList) {
      if (name === card.name) {
        this.cardList.splice(this.cardList.indexOf(card),1);
      } else {
        card.isSelected = false;
      }
    }
  }
}
