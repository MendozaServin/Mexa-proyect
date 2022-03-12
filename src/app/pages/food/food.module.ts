import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [FoodComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule
  ]
})
export class FoodModule { }
