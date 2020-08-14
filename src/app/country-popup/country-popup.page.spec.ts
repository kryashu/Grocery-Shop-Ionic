import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountryPopupPage } from './country-popup.page';

describe('CountryPopupPage', () => {
  let component: CountryPopupPage;
  let fixture: ComponentFixture<CountryPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryPopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
