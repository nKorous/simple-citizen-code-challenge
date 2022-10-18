import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/cart';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem: CartItem

  constructor(
    private cartService: CartService
  ) { }

  remove() {
    this.cartService.removeFromCart(this.cartItem.id)
  }

}
