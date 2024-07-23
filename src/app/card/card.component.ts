import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
  <div class="card">
    <div class="card-image">
      <figure class="image is-square">
      <img src="https://bulma.io/assets/images/placeholders/128x128.png" alt="Placeholder image"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">Item Name</p>
          <p class="subtitle is-6">$0.00</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
      <button class="button is-primary">Add to Cart</button>
    </div>
  </div>
  `,
})
export class CardComponent {

}
