import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DessertsComponent} from "./desserts.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [DessertsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DessertsModule { }
