import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {routes} from "./routes";
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [  ],
  imports: [
    RouterModule.forRoot(routes, ({useHash:true})),
    LoginModule
  ],
  exports: [
    RouterModule
  ],

})
export class RoutesModule {
  constructor() {
  }
}
