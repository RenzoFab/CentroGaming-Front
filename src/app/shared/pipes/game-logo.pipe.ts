import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/games/interfaces/game.interface';

@Pipe({
  name: 'gameLogo',
})
export class GameLogoPipe implements PipeTransform {
  transform(game: Game): string {
    if (!game.id) return 'assets/no-image.png';
    return `assets/Juegos/${game.id}-logo.jpg`;
  }
}
