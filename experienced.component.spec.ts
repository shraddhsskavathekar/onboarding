import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencedComponent } from './experienced.component';

describe('ExperiencedComponent', () => {
  let component: ExperiencedComponent;
  let fixture: ComponentFixture<ExperiencedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
