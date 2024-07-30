import { Component, Input } from '@angular/core';
import { CartItem } from '../cart-item';
import readFile from "../inventory.json"

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [],
  template: `
    <div class="box">
      <article class="media">
        <figure class="media-left">
          <div class="image is-square is-96x96">
            <img [src]="get_item_image(cart_item_data.id)" alt="Image" />
          </div>
        </figure>
        <div class="media-content mr-6">
          <div class="level">
            <div class="level-left">
              <div class="container">
                <p class="title">{{ this.get_item_name(cart_item_data.id) }}</p>
                <p class="subtitle">Quantity: {{ cart_item_data.quantity }}</p>
              </div>
            </div>
            <div class="level-right">
              <div class="container">
                  <p class="subtitle">\${{ (this.get_item_price(cart_item_data.id) * cart_item_data.quantity).toFixed(2) }}</p>
                  <button class="button is-danger">Remove From Cart</button>
                </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  `
})
export class CartCardComponent {
  inventory = readFile

  @Input() cart_item_data! : CartItem

  get_item_image(id : number) {
    const image_url = this.inventory.find((item) => item.id == id)?.imgUrl
    return image_url ?? "https://bulma.io/assets/images/placeholders/128x128.png"
  }

  get_item_name(id : number) {
    const item_name = this.inventory.find((item) => item.id == id)?.item_name
    return item_name ?? "Item Name"
  }

  get_item_price(id : number) : number {
    const price = this.inventory.find((item) => item.id == id)?.price
    return price ?? 0
  }
}
