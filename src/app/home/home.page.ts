import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Platform} from 'ionic-angular/umd';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loaderValue;
  constructor(  private router: Router,
                private platform: Platform) {
    this.exit();
  }


  ngOnInit(): void {
    this.startTimer();
  }

  exit(){
    this.platform.backButton.subscribe(async () => {
    this.platform.exitApp(); });
  }

  startTimer() {
    console.log('start');
    this.loaderValue = setTimeout(() => {
      // my to do
      this.router.navigate(['sign']);
    }, 3000);
  }
}
