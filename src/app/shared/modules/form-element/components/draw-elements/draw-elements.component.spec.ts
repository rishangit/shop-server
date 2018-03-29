import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawElementsComponent } from './draw-elements.component';

describe('DrawElementsComponent', () => {
  let component: DrawElementsComponent;
  let fixture: ComponentFixture<DrawElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
