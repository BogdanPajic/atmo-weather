import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Round'})

export class Round implements PipeTransform {


  transform(value: number): number {
    
    
    return (Math.round(value));
    
  }
}