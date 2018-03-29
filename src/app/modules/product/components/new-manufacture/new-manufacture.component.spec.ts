import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewManufactureComponent } from './new-manufacture.component';

describe('NewManufactureComponent', () => {
  let component: NewManufactureComponent;
  let fixture: ComponentFixture<NewManufactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewManufactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewManufactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
