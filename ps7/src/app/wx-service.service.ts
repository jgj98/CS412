import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {config as API} from '../config/openweather';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WxServiceService {

  baseURL: string = API.baseURL

  constructor(private http: HttpClient) {
  }

  getWeatherByCity(city: string): Observable<any> {
    console.log(`in getWeatherByCity `);
    return this.http.post<any>('http://localhost:3000/ps4', {q: city});
  }
}
