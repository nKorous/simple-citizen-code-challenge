import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CartItem } from '../cart';
import { CartService } from '../cart.service';

@UntilDestroy()
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  cartCount: number = 0;
  cart: CartItem[] = []
  grandTotal: number = 0

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getClientCartItems()
  }

  getClientCartItems() {
    this.cartService.clientCart$
      .pipe(untilDestroyed(this))
      .subscribe(data => {
        this.cartCount = data.length
        this.cart = data
        
        this.grandTotal = data.reduce((acc, cur) => {
          acc+= (cur.basePrice * cur.quantity)

          return acc
        }, 0)
      })
  }

  viewCart() {
    this.router.navigate(['cart'])
  }

  goToList() {
    this.router.navigate(['frisbees'])
  }

}
