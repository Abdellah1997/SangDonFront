import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CentresPage } from './centres.page';

describe('CentresPage', () => {
  let component: CentresPage;
  let fixture: ComponentFixture<CentresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CentresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
