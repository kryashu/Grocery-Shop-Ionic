import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WishlistTabPage } from './wishlist-tab.page';

describe('WishlistTabPage', () => {
  let component: WishlistTabPage;
  let fixture: ComponentFixture<WishlistTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WishlistTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
