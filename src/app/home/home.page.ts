import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Plugins} from '@capacitor/core';
import {IonRouterOutlet,Platform} from '@ionic/angular';

const { App } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loaderValue;
  constructor(  private router: Router,
                private routerOutlet: IonRouterOutlet,
                private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
          this.router.events.subscribe((e) => {
              if (e instanceof NavigationEnd) {
                  if (this.router.url === '/home') {
                      this.startTimer();
                  }
              }
          });

  }


  ngOnInit(): void {
    this.startTimer();
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
