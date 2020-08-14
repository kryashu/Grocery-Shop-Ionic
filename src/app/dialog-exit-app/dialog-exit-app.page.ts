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
  async close() {
    await this.modalController.dismiss();
  }
  exit() {
    // tslint:disable-next-line
    navigator["app"].exitApp();
  }
}
