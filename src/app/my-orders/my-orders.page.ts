import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.page.html',
    styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
    orders = [{name: 'More Market', price: 17.00, discountedPrice: 19.50, status: 'Order Status'}, {
        name: 'More Market',
        price: 17.00,
        discountedPrice: 19.50,
        status: 'Order Status'
    },
        {name: 'More Market', price: 17.00, discountedPrice: 19.50, status: 'Order Status'}, {
            name: 'More Market',
            price: 17.00,
            discountedPrice: 19.50,
            status: 'Order Status'
        },
        {name: 'More Market', price: 17.00, discountedPrice: 19.50, status: 'Order Status'}, {
            name: 'More Market',
            price: 17.00,
            discountedPrice: 19.50,
            status: 'Order Status'
        }];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

}
