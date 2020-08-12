import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { BackButtonEvent } from '@ionic/core';
import { Platform } from '@ionic/angular';
const { App } = Plugins;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private router: Router,
              private toastController: ToastController,
              private platform: Platform) {
  }

  ngOnInit() {
    if (this.router.url === '/tabs/homepage'){
    this.platform.backButton.subscribe(() => {
      this.presentToastWithOptions();
    }); }
  }
  exit(){
    const routerEl = document.querySelector('ion-router');
    const path = window.location.pathname;
    if (path === routerEl.root) {
      App.exitApp();
    }
  }
  openViewAll(name){
    this.router.navigate(['/view-all', {value: name}]);
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Untouched App',
      message: 'Are you sure u want to exit?',
      buttons: [
        {
          text: 'Cancle',
          role: 'cancle',
          handler: () => {
            this.toastController.dismiss();
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.exit();
          }
        }
      ]
    });
    toast.present();
  }

}
