import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import inventory from "./inventory.json";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart_contents : Array<CartItem> = [];
  
  constructor() {}

  add_to_cart(id : number) {
    if (this.cart_contents.find((item) => item.id == id)) {
      this.cart_contents[(this.cart_contents.findIndex((item) => item.id == id))].quantity += 1;
    }
    else {
      this.cart_contents.push({id: id, quantity:1});
    }
  }

  get_item_price(id : number) : number {
    const price = inventory.find((item) => item.id == id)?.price;
    return price ?? 0;
  }

  get_cart_total() : number {
    return this.cart_contents.reduce((total, item) => total + (this.get_item_price(item.id) * item.quantity), 0);
  }

  get_cart_contents() : Array<CartItem> {
    return this.cart_contents;
  }

  get_cart_quantity() : number {
    return this.cart_contents.reduce((accum, item) => accum + item.quantity, 0);
  }
}
