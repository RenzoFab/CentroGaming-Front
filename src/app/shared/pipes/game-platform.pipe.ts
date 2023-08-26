import { Pipe, PipeTransform } from '@angular/core';

import { Game } from 'src/app/games/interfaces/game.interface';

@Pipe({
  name: 'gamePlatform',
})
export class GamePlatformPipe implements PipeTransform {
  transform(gamePlatform: string): string {
    return `assets/${gamePlatform}.png`;
  }
}
