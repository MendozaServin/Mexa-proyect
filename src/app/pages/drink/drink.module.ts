import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrinkComponent} from "./drink.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [DrinkComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DrinkModule { }
