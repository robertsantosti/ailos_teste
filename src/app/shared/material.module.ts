import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatBadgeModule],
  exports: [MatButtonModule, MatIconModule, MatBadgeModule],
})
export class MaterialModule {}
