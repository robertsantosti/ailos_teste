import { SharedModule } from './../../shared/shared.module';
import { SidebarMenuComponent } from './../../layouts/sidebar-menu/sidebar-menu.component';
import { FooterComponent } from './../../layouts/footer/footer.component';
import { HeaderComponent } from './../../layouts/header/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HOME_ROUTES } from './../../core/routes/home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarMenuComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(HOME_ROUTES)],
})
export class HomeModule {}
