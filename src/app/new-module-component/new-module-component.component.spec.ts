import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewModuleComponentComponent } from './new-module-component.component';

describe('NewModuleComponentComponent', () => {
  let component: NewModuleComponentComponent;
  let fixture: ComponentFixture<NewModuleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewModuleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
