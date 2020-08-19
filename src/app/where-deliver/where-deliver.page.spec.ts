import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhereDeliverPage } from './where-deliver.page';

describe('WhereDeliverPage', () => {
  let component: WhereDeliverPage;
  let fixture: ComponentFixture<WhereDeliverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereDeliverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhereDeliverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
