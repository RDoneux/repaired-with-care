import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './image-background/page-title.component';



@NgModule({
  declarations: [PageTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [PageTitleComponent]

})
export class PageTitleModule { }
