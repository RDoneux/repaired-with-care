import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inline-service',
  templateUrl: './inline-service.component.html',
  styleUrls: ['./inline-service.component.scss'],
})
export class InlineServiceComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) imageUrl!: string;
}
