import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-dialog-exit-app',
  templateUrl: './dialog-exit-app.page.html',
  styleUrls: ['./dialog-exit-app.page.scss'],
})
export class DialogExitAppPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  close() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }
  exit() {
    // tslint:disable-next-line
    navigator["app"].exitApp();
  }
}
