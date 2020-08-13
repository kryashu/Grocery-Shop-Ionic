import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.page.html',
  styleUrls: ['./search-tab.page.scss'],
})
export class SearchTabPage implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  // tslint:disable-next-line:max-line-length
  storeList = [{name: 'More Market', tag: 'Medical, Confectionary, European, International…', star: '4.8(120+)', time: '60 Min', cost: 'Free'},{name: 'More Market', tag: 'Medical, Confectionary, European, International…', star: '4.8(120+)', time: '60 Min', cost: 'Free'}];
  caardList = [{name: '$1000 Monthly Gift Card', tag: 'Lorem Ipsum', star: '4.8(120+)', time: '60 Min', cost: 'Free'},{name: '$1000 Monthly Gift Card', tag: 'Lorem Ipsum', star: '4.8(120+)', time: '60 Min', cost: 'Free'}];
  @ViewChild('search',{static:false})
  public searchElementRef: ElementRef;
  constructor( private mapsAPILoader: MapsAPILoader,
               private ngZone: NgZone,
               private navCtrl: NavController) { }

  ngOnInit() {
    // //load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {
    //   this.setCurrentLocation();
    //   this.geoCoder = new google.maps.Geocoder;
    //
    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: ["address"]
    //   });
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       //get the place result
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
    //
    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }
    //
    //       //set latitude, longitude and zoom
    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();
    //       this.zoom = 12;
    //     });
    //   });
    // });
  }
  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }


  markerDragEnd($event: any) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
}
