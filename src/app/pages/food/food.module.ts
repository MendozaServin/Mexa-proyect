import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [FoodComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class FoodModule { }
