import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromControlComponent } from './from-control.component';

describe('FromControlComponent', () => {
  let component: FromControlComponent;
  let fixture: ComponentFixture<FromControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
