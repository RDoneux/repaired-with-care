import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  titleText: string = 'Clothes Repaired With Care'
  imageSource: string = 'assets/images/landing-page-background.jpg'

}
