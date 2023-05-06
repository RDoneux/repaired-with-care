import { Component } from '@angular/core';
import { IPriceEntry } from './components/price-entry/i-price-entry';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  titleText: string = 'Pricing';
  imageSource: string = 'assets/images/pricing-head.jpg';

  priceEntries: IPriceEntry[] = [
    { service: 'Button Repair', value: 3.54 },
    { service: 'New Zip', value: 4.2 },
    { service: 'Rehem Trousers', value: 5.5 },
    { service: 'Trouser waist in / waist out', value: 5.25 },
    { service: 'Dress Shortening', value: 10.25 },
    { service: 'Patch Repair', value: 7.5 },
    { service: 'Trouser Shortening', value: 6.35 },
    { service: 'Ironing (20 items)', value: 10.0 },
    { service: 'Ironing (20 items with pickup service)', value: 15.0}
  ];
}
