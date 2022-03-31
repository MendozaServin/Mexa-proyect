import {HttpClient} from "@angular/common/http";
import { api } from "../../environments/api";
import { Observable } from "rxjs";

import { Injectable} from "@angular/core";

@Injectable({

  providedIn: 'root'
})
export class HttpClientService{

  constructor(private service:HttpClient) {
  }

  public getHFood(): Observable<any>{
    return this.service.get(api.API_SERVER + "getHFood")
  }

  public getCFood(): Observable<any>{
    return this.service.get(api.API_SERVER + "getCFood")
  }

 public getHDrink(): Observable<any>{
    return this.service.get(api.API_SERVER + "getHDrink")
 }

 public getCDrink(): Observable<any>{
    return this.service.get(api.API_SERVER + "getCDrink")
 }

 public getADrink(): Observable<any>{
    return this.service.get(api.API_SERVER + "getADrink")
 }

 public getD(): Observable<any>{
    return this.service.get(api.API_SERVER + "getD")
 }
}
