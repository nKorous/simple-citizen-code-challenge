import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Frisbee } from '../frisbee';
import { FrisbeeService } from '../frisbee.service';

@Component({
  selector: 'app-frisbee-list',
  templateUrl: './frisbee-list.component.html',
  styleUrls: ['./frisbee-list.component.css']
})
export class FrisbeeListComponent {


  get frisbees$() {
    return this.frisbeeService.loadFilteredFrisbees()
  }

  constructor(
    private frisbeeService: FrisbeeService,
    private router: Router
  ) { }

  selectFrisbee(frisbee: Frisbee) {
    this.router.navigate([`frisbees/${frisbee.id}`])
  }

}
