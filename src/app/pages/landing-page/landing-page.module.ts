import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { ImageBackgroundComponent } from './components/image-background/image-background.component';
import { AboutComponent } from './components/about/about.component';
import { MediaIconsComponent } from './components/media-icons/media-icons.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    ImageBackgroundComponent,
    AboutComponent,
    MediaIconsComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
