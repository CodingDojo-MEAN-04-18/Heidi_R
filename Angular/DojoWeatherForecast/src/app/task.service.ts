import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: Http) { }
  getWeather(city?){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${city},us&appid=690f9f0c641ad406af8f7788b949b901&units=imperial`)
      .map(response => response.json());
  }
}
