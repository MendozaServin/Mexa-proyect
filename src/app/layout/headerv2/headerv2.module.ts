import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Headerv2Component} from "./headerv2.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [Headerv2Component],
  exports: [
    Headerv2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Headerv2Module { }
