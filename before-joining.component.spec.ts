import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeJoiningComponent } from './before-joining.component';

describe('BeforeJoiningComponent', () => {
  let component: BeforeJoiningComponent;
  let fixture: ComponentFixture<BeforeJoiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeJoiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeJoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
