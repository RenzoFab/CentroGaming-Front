import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../interfaces/cart.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css'],
})
export class LayoutPageComponent {
  constructor(private cartService: CartService) {}

  get cart(): Cart {
    return this.cartService.cart;
  }
}
