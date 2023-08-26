import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/games/interfaces/game.interface';
import { GameService } from '../../../games/services/game.service';
import { CartItem } from '../../interfaces/cart.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input()
  item!: CartItem;

  game!: Game;

  constructor(
    private cartService: CartService,
    private GameService: GameService
  ) {}

  ngOnInit(): void {
    this.GameService.getGame(this.item.id).subscribe((game) => {
      if (!game) return;
      return (this.game = game);
    });
  }

  deleteCartItem(id: string) {
    this.cartService.removeItem(id);
  }
}
