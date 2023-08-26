import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './components/button/button.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { HeaderComponent } from './components/header/header.component';

import { GameImagePipe } from './pipes/game-image.pipe';
import { GamePricePipe } from './pipes/game-price.pipe';
import { GameLogoPipe } from './pipes/game-logo.pipe';
import { GamePlatformPipe } from './pipes/game-platform.pipe';
import { SerchBoxComponent } from './components/serch-box/serch-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [
    ButtonComponent,
    GameCardComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    LazyImageComponent,
    // PIPES
    GameImagePipe,
    GameLogoPipe,
    GamePlatformPipe,
    GamePricePipe,
    SerchBoxComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    GameCardComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    LazyImageComponent,
    // PIPES
    GameImagePipe,
    GameLogoPipe,
    GamePlatformPipe,
    GamePricePipe,
  ],
})
export class SharedModule {}
