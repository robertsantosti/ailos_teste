import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperadoStepperComponent } from './cooperado-stepper.component';

describe('CooperadoStepperComponent', () => {
  let component: CooperadoStepperComponent;
  let fixture: ComponentFixture<CooperadoStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperadoStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperadoStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
