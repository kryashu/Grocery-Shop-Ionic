import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.page.html',
  styleUrls: ['./profile-tab.page.scss'],
})
export class ProfileTabPage implements OnInit {
  notification = true;
  newsletters = false;
  blank = true;
  constructor(public toastController: ToastController,
              public router: Router) { }

  ngOnInit() {
  }
  async change(name, value){
  const toast = await this.toastController.create({
    message: name + ' ' + value,
    duration: 2000,
    cssClass: 'Toast'
  });
  await toast.present();
}
}
