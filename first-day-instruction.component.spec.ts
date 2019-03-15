import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDayInstructionComponent } from './first-day-instruction.component';

describe('FirstDayInstructionComponent', () => {
  let component: FirstDayInstructionComponent;
  let fixture: ComponentFixture<FirstDayInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDayInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDayInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
