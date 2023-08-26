import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BannerComponent } from './components/banner/banner.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { GenreListComponent } from './components/genre-list/genre-list.component';

@NgModule({
  declarations: [LayoutPageComponent, BannerComponent, GenreListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule,
  ],
})
export class HomeModule {}
