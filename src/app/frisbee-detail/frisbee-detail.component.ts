import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
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
    private frisbeeService: FrisbeeService
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

}
