import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialogExitAppPage } from './dialog-exit-app.page';

describe('DialogExitAppPage', () => {
  let component: DialogExitAppPage;
  let fixture: ComponentFixture<DialogExitAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogExitAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogExitAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
