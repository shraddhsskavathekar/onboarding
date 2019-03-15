import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAndBackgroundComponent } from './medical-and-background.component';

describe('MedicalAndBackgroundComponent', () => {
  let component: MedicalAndBackgroundComponent;
  let fixture: ComponentFixture<MedicalAndBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalAndBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAndBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
