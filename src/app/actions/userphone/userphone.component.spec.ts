import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserphoneComponent } from './userphone.component';

describe('UserphoneComponent', () => {
  let component: UserphoneComponent;
  let fixture: ComponentFixture<UserphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
