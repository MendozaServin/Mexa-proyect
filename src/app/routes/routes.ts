import {HomeComponent} from "../pages/home/home.component";
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "../layout/layout.component";
import {FoodComponent} from "../pages/food/food.component";
import {DrinkComponent} from "../pages/drink/drink.component";
import {DessertsComponent} from "../pages/desserts/desserts.component";
import {ContactComponent} from "../pages/contact/contact.component";

export const routes = [
  {
    path: '',
    component: ContactComponent,
    children:[
      {path: '', component: HomeComponent},
      {path: 'food', component: FoodComponent},
      {path: 'drink', component: DrinkComponent},
      {path: 'desserts', component: DessertsComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'login', component: LoginComponent}
    ]
  },

  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'home'}
];
