import { Game } from './../../games/interfaces/game.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../interfaces/cart.interface';
import { GameService } from '../../games/services/game.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart: Cart = {
    items: [],
    price: 0,
    discount: 0,
    total: 0,
  };
  private _games: Game[] = [];

  constructor(private http: HttpClient, private gameService: GameService) {
    this.loadCartFromLocalStorage();
    this.gameService.getGames().subscribe((games) => (this._games = games));
  }

  get cart(): Cart {
    return { ...this._cart };
  }

  private calculatePrice() {
    let totalPrice = 0;
    let totalDiscount = 0;

    for (const cartItem of this._cart.items) {
      const game = this._games.find((game) => game.id === cartItem.id);
      if (game) {
        const subtotal = game.price * cartItem.amount;
        const itemDiscount = (subtotal * game.discount) / 100;
        totalPrice += subtotal;
        totalDiscount += itemDiscount;
      }
    }

    this._cart.price = totalPrice;
    this._cart.discount = totalDiscount;
    this._cart.total = totalPrice - totalDiscount;
    this.saveCartToLocalStorage();
  }

  private loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this._cart = JSON.parse(storedCart);
    }
  }

  private saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this._cart));
  }

  addItem({ id }: Game) {
    const itemToUpdate = this._cart.items.find((item) => id === item.id);
    if (!itemToUpdate) {
      this._cart.items.push({ id, amount: 1 });
    } else {
      itemToUpdate.amount += 1;
    }
    this.calculatePrice();
  }

  removeItem(id: string) {
    this._cart.items = this._cart.items.filter(
      (cartItem) => cartItem.id !== id
    );
    this.calculatePrice();
  }

  updateAmount(id: string, amount: 1 | -1) {
    const itemToUpdate = this._cart.items.find((item) => item.id === id);

    if (itemToUpdate) {
      if (amount !== -1 || itemToUpdate.amount !== 1) {
        itemToUpdate.amount += amount;
        this.calculatePrice();
      }
    }
  }
}
