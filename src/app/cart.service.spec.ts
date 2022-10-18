import { TestBed } from '@angular/core/testing'; 

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should add a new item to the cart', () => {
    service.addToCart({
      id: 1,
      name: 'First',
      quantity: 1,
      image: '',
      basePrice: 29.99
    })

    service.clientCart$.subscribe(cart => {
      expect(cart.length).toBe(1)
    })
  })

  it('should remove the id(1) from the cart', () => {
    service.removeFromCart(1)

    service.clientCart$.subscribe(cart => {
      expect(cart.length).toBe(0)
    })
  })

});
