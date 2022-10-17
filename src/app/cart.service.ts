import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private clientCartItems: CartItem[] = []

  public clientCart$: Subject<CartItem[]> = new Subject<CartItem[]>()

  addToCart(item: CartItem) {
    const index = this.clientCartItems.findIndex(fi => fi.id === item.id)

    if(index !== -1) {
      this.clientCartItems[index].quantity+= item.quantity
    } else {
      this.clientCartItems = [...this.clientCartItems, item]
    }

    this.clientCart$.next(this.clientCartItems)
  }

  removeFromCart(id: number) {
    this.clientCartItems = this.clientCartItems.filter(fi => fi.id !== id)

    this.clientCart$.next(this.clientCartItems)
  }
}
