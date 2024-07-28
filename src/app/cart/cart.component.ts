import { Component } from '@angular/core';
import { CartCardComponent } from '../cart-card/cart-card.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
