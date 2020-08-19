import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  name = 'Aditya Kaushal';
  phone = '9654882872';
  address = 'Bucharest, Romania';
  phoneFlag = false;
  nameFlag = false;
  addressFlag = false;
  constructor(private router: Router,
              private location: Location) { }

  ngOnInit() {
  }
update(){
    if ((this.name !== '' && this.address !== '' && this.phone !== '') && (14 >= this.phone.length && this.phone.length > 4)){
      this.router.navigate(['tabs', 'profile-tab']);
    }else {
      if (this.name === ''){
          this.nameFlag = true;
      }else if (this.phone === ''){
        this.phoneFlag = true;
      } else if (this.address === '' ){
        this.addressFlag = true;
      }else{
        this.phoneFlag = true;
      }
    }
}
clearWarning(field){
    if (field === 'name'){
      this.nameFlag = false;
    }else if (field === 'phone'){
      this.phoneFlag = false;
    }else if (field === 'address'){
      this.addressFlag = false;
    }
}

back() {
      this.location.back()
}
}
