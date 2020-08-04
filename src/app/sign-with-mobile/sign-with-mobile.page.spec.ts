import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignWithMobilePage } from './sign-with-mobile.page';

describe('SignWithMobilePage', () => {
  let component: SignWithMobilePage;
  let fixture: ComponentFixture<SignWithMobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignWithMobilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignWithMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
