import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'atmo-forecast-icon',
  templateUrl: './forecast-icon.component.html',
  styleUrls: ['./forecast-icon.component.scss']
})
export class ForecastIconComponent implements OnInit {

	@Input() summary;

  constructor() { }

  ngOnInit() {
  }

}
