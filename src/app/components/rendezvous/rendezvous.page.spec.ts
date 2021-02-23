import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RendezvousPage } from './rendezvous.page';

describe('RendezvousPage', () => {
  let component: RendezvousPage;
  let fixture: ComponentFixture<RendezvousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezvousPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RendezvousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
