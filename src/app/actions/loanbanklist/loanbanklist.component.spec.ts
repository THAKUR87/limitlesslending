import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanbanklistComponent } from './loanbanklist.component';

describe('LoanbanklistComponent', () => {
  let component: LoanbanklistComponent;
  let fixture: ComponentFixture<LoanbanklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanbanklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanbanklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
