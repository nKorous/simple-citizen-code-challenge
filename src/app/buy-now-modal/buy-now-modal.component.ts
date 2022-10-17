import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Frisbee } from '../frisbee';

@Component({
  selector: 'app-buy-now-modal',
  templateUrl: './buy-now-modal.component.html',
  styleUrls: ['./buy-now-modal.component.css']
})
export class BuyNowModalComponent {
  frisbee: Frisbee
  counter: number = 1
  total: number


  constructor(
    private dialogRef: MatDialogRef<BuyNowModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: Frisbee
  ) {
    this.frisbee = data
    this.total = this.frisbee.price / 100
  }

  cancel() {
    this.dialogRef.close()
  }

  submit() {
    this.dialogRef.close({ frisbee: this.frisbee, quantity: this.counter, total: this.total})
  }

  incrementCounter() {
    this.counter+= 1

    this.getTotal()
  }

  decrementCounter() {
    if(this.counter > 0) {
      this.counter-= 1
    }

    this.getTotal()
  }

  getTotal() {
    this.total = this.counter * (this.frisbee.price / 100)
  }
}
