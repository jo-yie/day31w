import { Component, EventEmitter, Output } from '@angular/core';
import { InventoryItem } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})

export class InventoryComponent {

  // inventory list
  inventory: InventoryItem[] = [
    { id: 1, name: 'Laptop', description: 'Powerful gaming laptop', image: '/laptop.jpg' },
    { id: 2, name: 'Smartphone', description: 'Latest model smartphone', image: '/smartphone.jpg' },
    { id: 3, name: 'Headphones', description: 'Noise-canceling headphones', image: '/headphones.jpg' }
  ]

  @Output()
  addToCart = new Subject<InventoryItem>()

  // add item to cart 
  protected addItem(item: InventoryItem) {

    console.log(item)
    this.addToCart.next(item)

  }

}
