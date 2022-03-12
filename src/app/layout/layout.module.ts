import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import {RouterModule} from "@angular/router";
import {RoutesModule} from "../routes/routes.module";
import { Headerv2Component } from './headerv2/headerv2.component';



@NgModule({
  declarations: [
    HeaderComponent,
    Headerv2Component,
  ],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        RoutesModule
    ]
})
export class LayoutModule { }
