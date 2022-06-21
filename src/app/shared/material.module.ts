import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class MaterialModule {}
