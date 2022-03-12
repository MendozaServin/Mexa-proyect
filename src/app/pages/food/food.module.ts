import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food.component";



@NgModule({
  declarations: [FoodComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FoodModule { }
