import { Component, OnInit } from '@angular/core';
import { weatherList } from './Data/weatherMOCK';
import {Weather} from './Data/Weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PS6';
  weatherList: Weather[] = weatherList;
  weather: Weather;
  selectedWeather: Weather;
  constructor() { }

  ngOnInit(): void {
  }

  setSelectedWeather(weather: Weather): void {
    this.selectedWeather = weather;
  }
}
