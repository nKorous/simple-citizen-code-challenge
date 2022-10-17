import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BuyNowModalComponent } from '../buy-now-modal/buy-now-modal.component';
import { CartService } from '../cart.service';
import { Frisbee } from '../frisbee';
import { FrisbeeService } from '../frisbee.service';

@UntilDestroy()
@Component({
  selector: 'app-frisbee-detail',
  templateUrl: './frisbee-detail.component.html',
  styleUrls: ['./frisbee-detail.component.css']
})
export class FrisbeeDetailComponent implements OnInit {
  frisbeeId: string = ''
  frisbee: Frisbee | undefined
  hasErrors: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private frisbeeService: FrisbeeService,
    private router: Router,
    private matDialog: MatDialog,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.getIdFromRoute()
  }

  getIdFromRoute() {
    this.hasErrors = false
    this.activatedRoute.paramMap
      .pipe(untilDestroyed(this))
      .subscribe(params => {
        this.frisbeeId = typeof params.get('id') !== null ? params.get('id') as string : ''
        if (this.frisbeeId) {
          this.getFrisbee()
        }
      })
  }

  getFrisbee() {
    this.frisbeeService
      .loadFrisbee(this.frisbeeId)
      .pipe(untilDestroyed(this))
      .subscribe(frisbee => {
        if (frisbee) {
          this.frisbee = frisbee
        } else {
          this.hasErrors = true
        }

      })
  }

  backToList() {
    this.router.navigate(['frisbees'])
  }

  buyNow() {
    const dialog = this.matDialog.open(BuyNowModalComponent, {
      height: '30%',
      width: '30%',
      data: this.frisbee as Frisbee
    })

    dialog.afterClosed().subscribe(data => {
      console.log(data)
      if(data && data.quantity >= 1) {
        this.cartService.addToCart({
          id: data.frisbee.id,
          name: data.frisbee.name,
          quantity: data.quantity,
          basePrice: (data.frisbee.price / 100)
        })
      }
    })
  }

}
