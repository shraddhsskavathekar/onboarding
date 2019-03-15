import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YLComponent } from './yl.component';

describe('YLComponent', () => {
  let component: YLComponent;
  let fixture: ComponentFixture<YLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
