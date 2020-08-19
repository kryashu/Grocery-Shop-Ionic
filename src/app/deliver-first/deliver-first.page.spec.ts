import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliverFirstPage } from './deliver-first.page';

describe('DeliverFirstPage', () => {
  let component: DeliverFirstPage;
  let fixture: ComponentFixture<DeliverFirstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverFirstPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliverFirstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
