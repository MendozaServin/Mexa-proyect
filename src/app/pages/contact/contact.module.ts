import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";
import {RoutesModule} from "../../routes/routes.module";



@NgModule({
  declarations: [ContactComponent],
    imports: [
        CommonModule,
        RoutesModule
    ]
})
export class ContactModule { }
