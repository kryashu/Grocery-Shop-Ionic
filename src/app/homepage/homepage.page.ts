import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ModalController, NavController, ToastController} from '@ionic/angular';
import {Plugins} from '@capacitor/core';
import {BackButtonEvent} from '@ionic/core';
import {Platform} from '@ionic/angular';
import {AddBasketPage} from '../add-basket/add-basket.page';
import {DialogExitAppPage} from '../dialog-exit-app/dialog-exit-app.page';
import {fromEvent, Subscription} from 'rxjs';

const {App} = Plugins;

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.page.html',
    styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
    subscribe: any;
    flag = true;
    constructor(private router: Router,
                private toastController: ToastController,
                private platform: Platform,
                public modalController: ModalController,
                private navCtrl: NavController,
                public alertController: AlertController,
    ) {
        this.router.events.subscribe((e) => {
            this.subscribe = this.platform.backButton.subscribeWithPriority(0, () => {
                if (this.router.url.slice(0, 5) === '/tabs') {
                    this.presentalert();
                } else {
                    this.navCtrl.pop();
                }
            });
        });


    }

    ngOnInit() {
    }


    async presentalert() {
        const alert = await this.alertController.create({
            header: 'Untouched Ionic',
            message: 'Are you sure you want to exit?',
            cssClass: 'alertCancel',
            backdropDismiss: true,
            buttons: [
                {
                    text: 'NO',
                    cssClass: 'alertButton',
                    handler: () => {
                        this.flag = true;
                        this.alertController.dismiss();
                        return false;
                    }
                }, {
                    text: 'YES',
                    cssClass: 'alertButton',
                    handler: () => {
                        navigator['app'].exitApp();
                    }
                }
            ]
        });
        if (this.flag) {
            this.flag =  false;
            await alert.present();
        }
    }

    openViewAll(name) {
        this.router.navigate(['/view-all', {value: name}]);
    }

}
