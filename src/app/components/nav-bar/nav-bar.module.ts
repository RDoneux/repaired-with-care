import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { VerticalDivideComponent } from './components/vertical-divide/vertical-divide.component';



@NgModule({
  declarations: [
    NavBarComponent,
    VerticalDivideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
