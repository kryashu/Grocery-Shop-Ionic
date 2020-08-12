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
  subscribe: any;
  constructor(private router: Router,
              private toastController: ToastController,
              private platform: Platform) {
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () =>{
      if (this.constructor.name === 'HomepagePage'){
        if (window.confirm('Are you sure you want to exit?')){
          // tslint:disable-next-line
          navigator["app"].exitApp();
        }
      }
    });
  }

  ngOnInit() {
  }
  openViewAll(name){
    this.router.navigate(['/view-all', {value: name}]);
  }
  // async presentToastWithOptions() {
  //   const toast = await this.toastController.create({
  //     header: 'Untouched App',
  //     message: 'Are you sure u want to exit?',
  //     buttons: [
  //       {
  //         text: 'Cancle',
  //         role: 'cancle',
  //         handler: () => {
  //           toast.dismiss();
  //         }
  //       }, {
  //         text: 'Ok',
  //         handler: () => {
  //           window.close();
  //         }
  //       }
  //     ]
  //   });
  //   toast.present();
  // }

}
