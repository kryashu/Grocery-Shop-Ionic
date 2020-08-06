import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loaderValue;
  constructor(  private router: Router) {

  }


  ngOnInit(): void {
    this.startTimer();
  }
  exit(){}
  startTimer() {
    console.log('start');
    this.loaderValue = setTimeout(() => {
      // my to do
      this.router.navigate(['sign']);
    }, 3000);
    //
    // setTimeout(() => {
    //   this.router.navigate(['tabs', 'homepage']);
    // }, 30000);
  }
}
