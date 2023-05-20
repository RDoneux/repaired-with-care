import { Component } from '@angular/core';
import { IInlineService } from './i-inline-service';

@Component({
  selector: 'app-inline-services',
  templateUrl: './inline-services.component.html',
  styleUrls: ['./inline-services.component.scss'],
})
export class InlineServicesComponent {
  headingText: string = 'Getting Started';

  services: IInlineService[] = [
    {title: 'Ironing', imageUrl: 'assets/images/services-head__desktop.jpg'},
    {title: 'Pricing', imageUrl: 'assets/images/pricing-head__desktop.jpg'},
    {title: 'Contact', imageUrl: 'assets/images/contact-head__desktop.jpg'},
    {title: 'Testimonies', imageUrl: 'assets/images/testimonies-head__desktop.jpg'}
  ]
}
