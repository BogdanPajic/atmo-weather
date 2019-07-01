import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';



@Component({
  selector: 'atmo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  city;
  forecast: any;
	weather: any;
  list = [{}, {}, {}, {}, {}];
  

  constructor(private service: WeatherService) { }

  ngOnInit() {

  }

  showForecast(city) {
     
    this.city = city;
    this.service.getWeather(this.city).subscribe(res => {
        this.weather = res;
     });
    this.service.getForecast(this.city).subscribe(res => {
        this.list[0] = res.forecastList[0];
        this.list[1] = res.forecastList[1];
        this.list[2] = res.forecastList[2];
        this.list[3] = res.forecastList[3];
        this.list[4] = res.forecastList[4];
    });     
  }

}
