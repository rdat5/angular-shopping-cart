import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart_contents : Array<CartItem> = [];

  constructor() {}

  add_to_cart(id : number) {
    if (this.cart_contents.find((item) => item.id == id)) {
      this.cart_contents[(this.cart_contents.findIndex((item) => item.id == id))].quantity += 1
    }
    else {
      this.cart_contents.push({id: id, quantity:1})
    }
  }

  get_cart_contents() : Array<CartItem> {
    return this.cart_contents
  }

  get_cart_quantity() : number {
    return this.cart_contents.reduce((accum, item) => accum + item.quantity, 0)
  }
}
