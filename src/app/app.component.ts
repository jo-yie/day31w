import { Component } from '@angular/core';
import { CartItem, InventoryItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'day31w';

  itemToAdd!: InventoryItem

  // initialise empty array
  updatedCart: CartItem[] = []

  whenAddToCart(item: InventoryItem) {

    this.itemToAdd = item
    this.updateCart(item)

  }

  updateCart(item: InventoryItem) {

    const isExistingItem = this.updatedCart.findIndex(cartItem => cartItem.item.id === item.id);

    if (isExistingItem !== -1) {

      this.updatedCart[isExistingItem].quantity++

    } else {

      const newCartItem: CartItem = { item, quantity: 1 }
      this.updatedCart.push(newCartItem)

    }

    // notify shopping-cart component of this change 
    this.updatedCart = [...this.updatedCart]

  }

  removedItemUpdatedCart(cart: CartItem[]) {
    
    this.updatedCart = cart

  }

}
