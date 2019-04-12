import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbanklistComponent } from './showbanklist.component';

describe('ShowbanklistComponent', () => {
  let component: ShowbanklistComponent;
  let fixture: ComponentFixture<ShowbanklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbanklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbanklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
