import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'atmo-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent implements OnInit {

	@Input() item;

  constructor() { }

  ngOnInit() {
  }

}
