import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from "./home/home.module";
import {FoodModule} from "./food/food.module";
import {DrinkModule} from "./drink/drink.module";
import {DessertsModule} from "./desserts/desserts.module";
import {ContactModule} from "./contact/contact.module";

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    HomeModule,
    FoodModule,
    DrinkModule,
    DessertsModule,
    ContactModule,
  ]
})
export class PagesModule { }
