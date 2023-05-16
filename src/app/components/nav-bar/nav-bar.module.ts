import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { VerticalDivideComponent } from './components/vertical-divide/vertical-divide.component';
import { RouterModule } from '@angular/router';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';



@NgModule({
  declarations: [
    NavBarComponent,
    VerticalDivideComponent,
    BurgerMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
