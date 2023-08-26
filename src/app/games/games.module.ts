import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { GamePriceComponent } from './components/game-price/game-price.component';

@NgModule({
  declarations: [LayoutPageComponent, GamePageComponent, ListPageComponent, GamePriceComponent],
  imports: [CommonModule, GamesRoutingModule, SharedModule],
})
export class GamesModule {}
