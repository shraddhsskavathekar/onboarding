import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogtoComponent } from './logto.component';

describe('LogtoComponent', () => {
  let component: LogtoComponent;
  let fixture: ComponentFixture<LogtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
