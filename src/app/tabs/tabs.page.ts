import {Component, OnInit, ViewChild} from '@angular/core';
import {IonTabs} from "@ionic/angular";
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
                private router: Router) { }

  ngOnInit() {
  }
  getSelectedTab(): any {
   this.activeStep = this.tabs.getSelected()
   }
}
