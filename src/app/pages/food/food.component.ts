import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/backend";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  getHFood: any
  getCFood: any

  constructor(private http: HttpClientService) {
  }

  ngOnInit(): void {
    this.getHFood = this.http.getHFood();
    this.getCFood = this.http.getCFood();
  }
}
