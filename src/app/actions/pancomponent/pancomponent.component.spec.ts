import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PancomponentComponent } from './pancomponent.component';

describe('PancomponentComponent', () => {
  let component: PancomponentComponent;
  let fixture: ComponentFixture<PancomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PancomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PancomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
