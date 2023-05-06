import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { MediaIconsComponent } from './components/media-icons/media-icons.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';

@NgModule({
  declarations: [LandingPageComponent, AboutComponent, MediaIconsComponent],
  imports: [CommonModule, LandingPageRoutingModule, PageTitleModule],
})
export class LandingPageModule {}
