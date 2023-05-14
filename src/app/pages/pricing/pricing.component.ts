import { Component } from '@angular/core';
import { IPriceEntry } from './components/price-entry/i-price-entry';
import prices from '../../../assets/documents/prices.json';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  titleText: string = 'Pricing';
  imageSource: string = 'assets/images/pricing-head.jpg';

  priceEntries: IPriceEntry[] = prices;
}
