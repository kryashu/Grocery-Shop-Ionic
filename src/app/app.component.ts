import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  flag = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((val) => {
     // @ts-ignore
      if (val.url === '/homepage'){
       this.flag = true;
    }
      // @ts-ignore
      if (val.url === '/user-details'){
        if (this.flag) {
            location.reload();
            this.flag = false;
        }     }
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
