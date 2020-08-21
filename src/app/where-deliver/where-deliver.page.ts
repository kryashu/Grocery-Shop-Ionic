import { Component, OnInit } from '@angular/core';
import {Location, TitleCasePipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-where-deliver',
  templateUrl: './where-deliver.page.html',
  styleUrls: ['./where-deliver.page.scss'],
})
export class WhereDeliverPage implements OnInit {
  address1 = 'Piata Unirii 2';
  address2 = '';
  address3 = ''
  constructor(private location: Location,
              private router: Router,
              private titlecasePipe: TitleCasePipe) { }

  ngOnInit() {
  }
  transformName(){
    this.address3 = this.titlecasePipe.transform(this.address3);
    this.address1 = this.titlecasePipe.transform(this.address1);
    this.address2 = this.titlecasePipe.transform(this.address2);
  }
}
