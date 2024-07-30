import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from './cart.service';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // providers: [CartService]
})
export class AppComponent {
  constructor(private cart_service : CartService) {
  }

  get_cart() : Array<CartItem>  {
    return this.cart_service.get_cart_contents()
  }

  get_cart_quantity() : number {
    return this.cart_service.get_cart_quantity()
  }
}
