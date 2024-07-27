import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart_contents : Array<CartItem> = [];
  
  constructor() {}
}
