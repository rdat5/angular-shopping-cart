import { Component } from '@angular/core';
import { CartCardComponent } from '../cart-card/cart-card.component';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private cart_service : CartService) {
  }
  
  get_cart() : Array<CartItem> {
    return this.cart_service.cart_contents
  }

  get_cart_total() : number {
    return this.cart_service.get_cart_total()
  }

  get_cart_quantity() : number {
    return this.cart_service.get_cart_quantity()
  }
}
