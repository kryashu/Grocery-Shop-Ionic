import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewCardsPage } from './view-cards.page';

describe('ViewCardsPage', () => {
  let component: ViewCardsPage;
  let fixture: ComponentFixture<ViewCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
