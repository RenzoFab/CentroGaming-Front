import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/games/interfaces/game.interface';

@Pipe({
  name: 'gamePrice',
})
export class GamePricePipe implements PipeTransform {
  transform(game: Game, amount?: number): number {
    if (!game.discount) {
      if (amount) {
        return game.price * amount;
      } else {
        return game.price;
      }
    }

    let discountedPrice = ((100 - game.discount) / 100) * game.price;
    if (amount) {
      discountedPrice *= amount;
    }

    return discountedPrice;
  }
}
