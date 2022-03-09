import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {LayoutModule} from "../layout/layout.module";
import { ContactComponent } from './contact/contact.component';
import { FoodComponent } from './food/food.component';
import { DrinkComponent } from './drink/drink.component';
import { DessertsComponent } from './desserts/desserts.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    FoodComponent,
    DrinkComponent,
    DessertsComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatCardModule
  ]
})
export class PagesModule { }
