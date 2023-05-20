import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { MediaIconsComponent } from './components/media-icons/media-icons.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { StyledPointComponent } from './components/styled-point/styled-point.component';
import { HeadingModule } from 'src/app/components/heading/heading.module';
import { InlineServicesComponent } from './components/inline-services/inline-services.component';
import { InlineServiceComponent } from './components/inline-service/inline-service.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    AboutComponent,
    MediaIconsComponent,
    HowItWorksComponent,
    StyledPointComponent,
    InlineServicesComponent,
    InlineServiceComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    PageTitleModule,
    HeadingModule,
  ],
})
export class LandingPageModule {}
