import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-select-payment',
    templateUrl: './select-payment.page.html',
    styleUrls: ['./select-payment.page.scss'],
})
export class SelectPaymentPage implements OnInit {
    methodList = [{name: 'Pick up myself', isSelected: false}, {name: 'Cash on Delivery', isSelected: false}, {
        name: 'Pay with credit card',
        isSelected: false
    }];

    constructor(private router: Router,
                private location: Location,
                public alertController: AlertController) {
    }

    ngOnInit() {
    }

    back() {
        this.location.back();
    }

    check(name) {
        for (const method of this.methodList) {
            if (name === method.name) {
                method.isSelected = true;
                if (name === 'Pay with credit card') {
                    this.confirmAlert(true);
                }else{
                    this.confirmAlert(false);
                }
            } else {
                method.isSelected = false;
            }
        }
    }

    async confirmAlert(flag) {
        const alert = await this.alertController.create({
            cssClass: 'alertCancel',
            header: 'Are you sure!',
            message: 'You want to use this payment option?',
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
                        if (flag) {
                            this.router.navigate(['view-cards']);
                        }else{
                            this.router.navigate(['view-cards']);
                        }
                    }
                }
            ]
        });

        await alert.present();
    }
}
