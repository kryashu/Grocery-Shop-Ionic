import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController, ToastController} from '@ionic/angular';
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
  subscribe: any;
  constructor(private router: Router,
              private toastController: ToastController,
              private platform: Platform,
              private navCtrl: NavController) {
    this.router.events.subscribe((e) => {
        if (this.router.url === '/tabs/homepage') {
          this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
            if (this.router.url === '/tabs/homepage'){
              this.presentToastWithOptions();
            }else{
                this.navCtrl.pop();
            }
          });
        }
    });
  }

  ngOnInit() {
  }
  openViewAll(name){
    this.router.navigate(['/view-all', {value: name}]);
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Untouched App',
      message: 'Are you sure u want to exit?',
      duration: 5000,
      position: 'middle',
      buttons: [
        {
          text: 'Cancle',
          role: 'cancle',
          handler: () => {
            toast.dismiss();
          }
        }, {
          text: 'Ok',
          handler: () => {
            // tslint:disable-next-line
            navigator["app"].exitApp();
          }
        }
      ]
    });
    toast.present();
  }

}
