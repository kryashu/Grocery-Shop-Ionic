import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openViewAll(name){
    this.router.navigate(['/view-all', {value: name}]);
  }

}
