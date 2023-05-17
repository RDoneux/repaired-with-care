import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-styled-point',
  templateUrl: './styled-point.component.html',
  styleUrls: ['./styled-point.component.scss'],
})
export class StyledPointComponent {
  @Input({ required: true }) value!: string;
}
