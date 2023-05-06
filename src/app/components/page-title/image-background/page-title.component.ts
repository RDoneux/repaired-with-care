import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent {
  @Input({ required: true }) titleText!: string;
  @Input({ required: true }) imageSrc!: string;
  @Input() type: 'landing' | 'default' = 'default';
}
