import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { CartService } from '../../../cart/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'games-game-price',
  templateUrl: './game-price.component.html',
  styleUrls: ['./game-price.component.css'],
})
export class GamePriceComponent {
  @Input()
  game!: Game;

  constructor(private router: Router, private cartService: CartService) {}

  addItem(game: Game) {
    this.cartService.addItem(game);
    this.router.navigate(['/cart']);
  }
}
