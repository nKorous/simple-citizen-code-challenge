import { Component, Input } from '@angular/core';
import { Frisbee } from '../frisbee';

@Component({
  selector: 'app-frisbee',
  templateUrl: './frisbee.component.html',
  styleUrls: ['./frisbee.component.css']
})
export class FrisbeeComponent {
  @Input() frisbee: Frisbee | undefined
}
