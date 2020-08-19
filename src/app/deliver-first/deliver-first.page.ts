import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deliver-first',
  templateUrl: './deliver-first.page.html',
  styleUrls: ['./deliver-first.page.scss'],
})
export class DeliverFirstPage implements OnInit {

  constructor(private location: Location,
              private router: Router) { }

  ngOnInit() {
  }

}
