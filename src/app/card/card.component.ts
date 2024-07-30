import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
  <div class="card">
    <div class="card-image">
      <figure class="image is-square">
      <img [src]="imgUrl" alt="Placeholder image"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">{{ item_name }}</p>
          <p class="subtitle is-6">\${{ price.toFixed(2) }}</p>
        </div>
      </div>

      <div class="content">
        {{ item_description }}
      </div>
      <button class="button is-primary" (click)="add_to_cart()">Add to Cart</button>
    </div>
  </div>
  `,
})
export class CardComponent {
  @Input() item_id : number = 0;
  @Input() item_name : string = "Item Name";
  @Input() price : number = 1.00;
  @Input() item_description : string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  @Input() imgUrl : string = "https://bulma.io/assets/images/placeholders/128x128.png";

  constructor(private cart_service : CartService) {}

  add_to_cart() {
    this.cart_service.add_to_cart(this.item_id);
  }
}