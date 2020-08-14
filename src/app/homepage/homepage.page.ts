import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ModalController, NavController, ToastController} from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { BackButtonEvent } from '@ionic/core';
import { Platform } from '@ionic/angular';
import {AddBasketPage} from "../add-basket/add-basket.page";
import {DialogExitAppPage} from "../dialog-exit-app/dialog-exit-app.page";
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
              public modalController: ModalController,
              private navCtrl: NavController,
              public alertController: AlertController) {
    this.router.events.subscribe((e) => {
        if (this.router.url === '/tabs/homepage') {
          this.subscribe = this.platform.backButton.subscribeWithPriority(0, () => {
            if (this.router.url === '/tabs/homepage'){
              this.presentalert();
            }else{
                this.navCtrl.navigateBack('/tabs/homepage');
            }
          });
        }
    });
  }

  ngOnInit() {

  }
  async close() {
    await this.modalController.dismiss();
  }

  async presentalert() {
    const alert = await this.alertController.create({
      header: 'Untouched Ionic',
      message: 'Are you sure you want to exit?',
      cssClass: 'alertCancel',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'alertButton',
          handler: () => {
            this.navCtrl.navigateBack('/tabs/homepage')
            console.log('Confirm Cancel');
          }
        }, {
          text: 'YES',
          cssClass: 'alertButton',
          handler: () => {
            navigator["app"].exitApp();
          }
        }
      ]
    })
    alert.present();
  }

  openViewAll(name){
    this.router.navigate(['/view-all', {value: name}]);
  }
  async exitApp() {
    const modal = await this.modalController.create({
      component: DialogExitAppPage,
      cssClass: 'exitApp'
    });
    return await modal.present();
  }

}
