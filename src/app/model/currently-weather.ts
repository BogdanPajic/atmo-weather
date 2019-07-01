export class CurrentlyWeather {

	cityName: string;
	country: string;
	summary: string;
	temperature: number;
	minTemp: number;
	maxTemp: number;
	visibility: number;
	pressure: number;
	humidity: number;
	windspeed: number;
	
	constructor(obj?: any){
		
		this.cityName = obj && obj.name || null;
		this.country = obj && obj.sys.country || null;
		this.summary = obj && obj.weather[0].main || null;
		this.temperature = obj && obj.main.temp|| null;
		this.minTemp = obj && obj.main.temp_min || null;
		this.maxTemp = obj && obj.main.temp_max || null;
		this.visibility = obj && obj.visibility || null;
		this.humidity = obj && obj.main.humidity || null;
		this.pressure = obj && obj.main.pressure || null;
		this.windspeed = obj && obj.wind.speed || null;
	}
}

export class FiveDayForecastList {

	forecastList: any[];

	constructor(obj?: any) {
		this.forecastList = obj && obj.list || null;
	} 
}
