import { Component, Input  } from '@angular/core';
import { WxServiceService as WxService} from './wx-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpClient';
  currentWeather = null;

  city: string;

  weatherList: any[];

  constructor(private wxService: WxService, private form: FormBuilder) {}

  getWeatherByCity() {
    this.wxService.getWeatherByCity(this.city).subscribe(

      response => {
        console.log(response);
        this.currentWeather = response;// similar to current.temp
        this.currentWeather = {
          name: response['weatherData']['location']['name'],
          region: response['weatherData']['location']['region'],
          temp: response['weatherData']['current']['temp_f'],
          cache: response['cached'],
        };
        this.weatherList = [this.currentWeather,this.currentWeather, this.currentWeather];
      }
    );
  }
}

