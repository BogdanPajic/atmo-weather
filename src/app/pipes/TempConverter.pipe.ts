import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'TempConverter'})

export class TempConverter implements PipeTransform {


  transform(value: number): number {
    
    let celsius = (value - 273.15);
    return (Math.round(celsius));
    
  }
}