import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimoniesRoutingModule } from './testimonies-routing.module';
import { TestimoniesComponent } from './testimonies.component';


@NgModule({
  declarations: [
    TestimoniesComponent
  ],
  imports: [
    CommonModule,
    TestimoniesRoutingModule
  ]
})
export class TestimoniesModule { }
