import { Component, Input, OnInit } from '@angular/core';
import { Frisbee } from '../frisbee';

@Component({
  selector: 'app-frisbee',
  templateUrl: './frisbee.component.html',
  styleUrls: ['./frisbee.component.css']
})
export class FrisbeeComponent implements OnInit {
  @Input() frisbee: Frisbee | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
