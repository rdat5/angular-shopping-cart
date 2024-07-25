import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import readFile from "../inventory.json"

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  inventory = readFile
}
