import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimoniesRoutingModule } from './testimonies-routing.module';
import { TestimoniesComponent } from './testimonies.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { TestimonyComponent } from './components/testimony/testimony.component';

@NgModule({
  declarations: [TestimoniesComponent, TestimonyComponent],
  imports: [CommonModule, TestimoniesRoutingModule, PageTitleModule],
})
export class TestimoniesModule {}
