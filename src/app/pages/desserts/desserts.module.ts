import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DessertsComponent} from "./desserts.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [DessertsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DessertsModule { }
