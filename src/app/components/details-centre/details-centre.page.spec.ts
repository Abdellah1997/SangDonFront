import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsCentrePage } from './details-centre.page';

describe('DetailsCentrePage', () => {
  let component: DetailsCentrePage;
  let fixture: ComponentFixture<DetailsCentrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCentrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsCentrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
