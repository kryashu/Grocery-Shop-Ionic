import {Component, OnInit, ViewChild} from '@angular/core';
import {IonTabs, NavController} from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @ViewChild('myTabs') tabs: IonTabs;
  homepage: boolean;
  activeStep;
  constructor(  private route: ActivatedRoute,
                private router: Router,
                private navCtrl: NavController) { }

  ngOnInit() {
  }
  getSelectedTab(): any {
   this.activeStep = this.tabs.getSelected();
   }
}
