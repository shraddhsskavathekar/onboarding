import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterJoiningComponent } from './after-joining.component';

describe('AfterJoiningComponent', () => {
  let component: AfterJoiningComponent;
  let fixture: ComponentFixture<AfterJoiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterJoiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterJoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
