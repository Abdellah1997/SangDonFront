import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupprimerPage } from './supprimer.page';

describe('SupprimerPage', () => {
  let component: SupprimerPage;
  let fixture: ComponentFixture<SupprimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupprimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
