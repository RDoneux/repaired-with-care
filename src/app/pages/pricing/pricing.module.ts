import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { PriceEntryComponent } from './components/price-entry/price-entry.component';


@NgModule({
  declarations: [
    PricingComponent,
    PriceEntryComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule,
    PageTitleModule
  ]
})
export class PricingModule { }
