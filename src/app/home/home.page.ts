import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Plugins} from '@capacitor/core';
import {Platform} from '@ionic/angular';

const { App } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loaderValue;
  constructor(  private router: Router,
                private platform: Platform) {

  }


  ngOnInit(): void {
    this.startTimer();
    this.exit()
  }
  exit(){
    this.platform.backButton.subscribe(() => {
      App.exitApp();
    });
  }
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
