import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/backend";

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

  getD: any

  constructor(private http: HttpClientService) { }

  ngOnInit(): void {
    this.getD = this.http.getD();
  }

}
