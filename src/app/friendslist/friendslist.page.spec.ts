import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FriendslistPage } from './friendslist.page';

describe('FriendslistPage', () => {
  let component: FriendslistPage;
  let fixture: ComponentFixture<FriendslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FriendslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
