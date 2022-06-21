import { MaterialModule } from './../../shared/material.module';
import { NotFoundComponent } from './not-found.component';
import { NOT_FOUND_ROUTE } from './../../core/routes/not-found.routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(NOT_FOUND_ROUTE),
  ],
})
export class NotFoundModule {}
