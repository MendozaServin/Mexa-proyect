import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import {RouterModule} from "@angular/router";
import {RoutesModule} from "../routes/routes.module";
import { Headerv2Component } from './headerv2/headerv2.component';
import {Headerv2Module} from "./headerv2/headerv2.module";
import {HeaderModule} from "./header/header.module";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports: [
  ],
    imports: [
        CommonModule,
        RoutesModule,
      Headerv2Module,
      HeaderModule
    ]
})
export class LayoutModule { }
