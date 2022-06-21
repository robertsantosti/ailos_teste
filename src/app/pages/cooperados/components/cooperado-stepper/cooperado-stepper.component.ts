import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooperado-stepper',
  templateUrl: './cooperado-stepper.component.html',
  styleUrls: ['./cooperado-stepper.component.scss'],
})
export class CooperadoStepperComponent implements OnInit {
  @Input() step: number = 0;

  constructor() {}

  ngOnInit(): void {}

  changeStep(step: number): void {
    this.step = step;
  }
}
