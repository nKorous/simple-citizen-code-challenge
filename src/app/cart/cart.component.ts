import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  get cartItems() {
    return this.cartService.clientCart$
  }

  get cartItemLength() {
    return this.cartService.clientCart$.value.length
  }

  constructor(
    private cartService: CartService
  ) { }

}
