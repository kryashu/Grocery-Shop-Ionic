import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(public router: Router,
              private googlePlus: GooglePlus,
              private fb: Facebook) { }

  ngOnInit() {
  }
signInWithGoogle(){
  this.googlePlus.login({
    scope: '',
    webClientId: '1043507768297-8d4u0k5jkr8fde2te23e06ulf6cna06c.apps.googleusercontent.com',
    offline: true})
      .then(res => {
        console.log(res);
        alert(res);
        this.router.navigate(['tabs', 'homepage']);
      })
      .catch(err => alert(err));
}
signInWithFB(){
  this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res);
        alert(res);
        this.router.navigate(['tabs', 'homepage']);
      } )
      .catch(e => console.log('Error logging into Facebook', e));
  }
}
