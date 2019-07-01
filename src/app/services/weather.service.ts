import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentlyWeather } from '../model/currently-weather';
import { FiveDayForecastList } from '../model/currently-weather';

import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  apiKeys = {
    1: '8df48661432ec0c035096c64910baf0e',
    2: '53384860af9a92841b8f34a4b5ba1f63'
  }

  constructor(private http: HttpClient) { }

  getWeather(city) {
      return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +'&APPID=' + this.apiKeys[1] + '&units=metric').map(res => {
  		return new CurrentlyWeather(res);
      });
  }

  getForecast(city) {
      return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + this.apiKeys[2] + '&units=metric').map(res => {
        return new FiveDayForecastList(res);
	    });
	}
}

