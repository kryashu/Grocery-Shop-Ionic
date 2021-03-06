import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBasketPage } from './add-basket.page';

describe('AddBasketPage', () => {
  let component: AddBasketPage;
  let fixture: ComponentFixture<AddBasketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBasketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBasketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
