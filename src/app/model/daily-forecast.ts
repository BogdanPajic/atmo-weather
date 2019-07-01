export class FiveDayForecast {

		time: number;
		temperature: number;
		summary: string;

		constructor(obj?: any){
		
			this.time = obj && obj.dt || null;
			this.temperature = obj && obj.main.temp || null;
			this.summary = obj && obj.weather[0].main || null;
		}
}