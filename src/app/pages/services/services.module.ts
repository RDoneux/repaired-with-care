import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { ServiceComponent } from './components/service/service.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    PageTitleModule
  ]
})
export class ServicesModule { }
