import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrinkComponent} from "./drink.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [DrinkComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DrinkModule { }
