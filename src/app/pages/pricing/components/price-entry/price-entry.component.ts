import { Component, Input } from '@angular/core';
import { IPriceEntry } from './i-price-entry';

@Component({
  selector: 'app-price-entry',
  templateUrl: './price-entry.component.html',
  styleUrls: ['./price-entry.component.scss'],
})
export class PriceEntryComponent {
  @Input({ required: true }) priceEntry!: IPriceEntry;
}
