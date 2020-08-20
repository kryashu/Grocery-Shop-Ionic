import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.page.html',
    styleUrls: ['./address-list.page.scss'],
})
export class AddressListPage implements OnInit {

    constructor(private router: Router,
                private location: Location,
                public alertController: AlertController) {
    }

    addressList = [{name: 'Home address', value: 'Piata Unirii 2, Apartment 23…', isSelected: false}, {
        name: 'Work address',
        value: 'Piata Victoriei 6, Apartment 1…',
        isSelected: false
    }, {name: 'My sister’s place', value: 'Bulevardul Dimitrie Cantemir…', isSelected: false}];

    ngOnInit() {
    }

    back() {
        this.location.back();
    }

    check(name, event) {
        if (event.target.checked){
            this.presentAlertMultipleButtons();}
        for (const address of this.addressList) {
            if (name === address.name) {
                address.isSelected = true;
            } else {
                address.isSelected = false;
            }
        }
    }

    delete() {
        for (const address of this.addressList) {
            if (address.isSelected) {
                this.addressList.splice(this.addressList.indexOf(address),1);
            } else {
                address.isSelected = false;
            }
        }
    }
    async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
        cssClass: 'alertCancel',
        header: 'Are you sure!',
        message: 'You want to deliver at this address?',
        buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                    console.log('Confirm Cancel: blah');
                }
            },
              {
                text: 'Okay',
                handler: () => {
                    this.router.navigate(['select-payment']);
                }
            }
        ]
    });

    await alert.present();
}

}
