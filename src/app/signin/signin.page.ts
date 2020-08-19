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
  this.googlePlus.login({	scopes: '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      // tslint:disable-next-line:max-line-length
      webClientId: '17228169572-1sa7pt5p09venm95af3ogjotoecrg97h.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
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
