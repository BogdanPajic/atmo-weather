import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'TimeConverter'})

export class TimeConverter implements PipeTransform {


  transform(time: number): any {
    
    var pubDate = new Date(time * 1000);
	var hours = pubDate.getHours();
	var minutes = pubDate.getMinutes();
	if (hours < 10) {
		var formattedTime = '0' + hours + ':' + minutes + '0h';
	} else {
		var formattedTime = hours + ':' + minutes + '0h';
	}
	return formattedTime; 
    
  }
}