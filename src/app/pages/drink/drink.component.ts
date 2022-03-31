import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/backend";

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  getHDrinks: any
  getCDrink: any
  getADrink: any

  constructor(private http: HttpClientService) { }

  ngOnInit(): void {
    this.getHDrinks = this.http.getHDrink();
    this.getCDrink = this.http.getCDrink();
    this.getADrink = this.http.getADrink();
  }

}
