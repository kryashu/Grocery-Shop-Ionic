import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
name;
  emailcheck = false;
  eCheck;
email;
nameCheck = false;
gender ;
gCheck = false
  constructor(private router: Router,) { }

  ngOnInit() {
  }

  confirm(){
     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (this.name === undefined || this.name === '') {
      this.nameCheck = true;
      return  false;
    }else if (this.email === undefined  || this.email === '') {
      this.emailcheck = true;
      return false;
    }
     else if (!re.test(this.email)) {
      this.eCheck = true
      return false;
    } else if (this.gender === undefined || this.gender === '') {
       this.gCheck = true;
       return false;
     } else {
      this.router.navigate(['homepage']);
      return true;
    }
}

checkName() {
  if (this.name === undefined || this.name === '') {
    this.nameCheck = true;
    return  false;
  } else {
    this.nameCheck = false;
    return true;
  }
}
  checkEmail() {
    if (this.email === undefined  || this.email === '') {
      this.emailcheck = true
      return false;
    } else {
      this.emailcheck = false
      this.eCheck = false
      return true;
    }
  }


}
