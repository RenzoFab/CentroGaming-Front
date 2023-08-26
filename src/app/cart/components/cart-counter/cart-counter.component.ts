import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart.interface';

@Component({
  selector: 'cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.css'],
})
export class CartCounterComponent {
  @Input()
  item!: CartItem;

  constructor(private cartService: CartService) {}

  updateAmount(number: 1 | -1) {
    this.cartService.updateAmount(this.item.id, number);
  }
}
