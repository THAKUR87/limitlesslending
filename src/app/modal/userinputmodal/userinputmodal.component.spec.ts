import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinputmodalComponent } from './userinputmodal.component';

describe('UserinputmodalComponent', () => {
  let component: UserinputmodalComponent;
  let fixture: ComponentFixture<UserinputmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinputmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinputmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
