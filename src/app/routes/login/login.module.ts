import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule
    ]
})
export class LoginModule { }
