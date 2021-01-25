import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemanderPage } from './demander.page';

describe('DemanderPage', () => {
  let component: DemanderPage;
  let fixture: ComponentFixture<DemanderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemanderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
