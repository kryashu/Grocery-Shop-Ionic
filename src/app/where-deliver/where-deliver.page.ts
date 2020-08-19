import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-where-deliver',
  templateUrl: './where-deliver.page.html',
  styleUrls: ['./where-deliver.page.scss'],
})
export class WhereDeliverPage implements OnInit {
  address1 = 'Piata Unirii 2';
  address2 = '';
  constructor(private location: Location,
              private router: Router) { }

  ngOnInit() {
  }

}
