import { Component, Input } from '@angular/core';
import { Testimony } from '../../i-testimony';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss'],
})
export class TestimonyComponent {
  @Input({ required: true }) testimony!: Testimony;
}
