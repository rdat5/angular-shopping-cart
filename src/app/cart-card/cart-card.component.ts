import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [],
  template: `
    <div class="box">
      <article class="media">
        <figure class="media-left">
          <div class="image is-96x96">
            <img src="https://bulma.io/assets/images/placeholders/128x128.png" alt="Image" />
          </div>
        </figure>
        <div class="media-content mr-6">
          <div class="level">
            <div class="level-left">
              <div class="container">
                <p class="title">Blah</p>
                <p class="subtitle">Quantity: 1</p>
              </div>
            </div>
            <div class="level-right">
              <div class="container">
                  <p class="subtitle">Blah</p>
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

}
