import { Component, Input, Output } from '@angular/core';
import { CartItem, InventoryItem } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})

export class ShoppingCartComponent {

  @Input()
  shoppingCart: CartItem[] = []

  // // detect changes in input
  // ngOnChanges(changes: SimpleChanges): void {

  //   if (changes["item"] && !changes["item"].firstChange && changes["item"].currentValue) {

  //     console.log(this.item)
  //     this.updateCart(this.item)

  //   }

  // }

  @Output()
  removedItemCart = new Subject<CartItem[]>()

  protected removeItem(item: InventoryItem) {

    this.shoppingCart = this.shoppingCart.filter(cartItem => cartItem.item.id != item.id)
    this.removedItemCart.next(this.shoppingCart)

  }

}
