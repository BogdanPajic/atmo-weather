import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'atmo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

city: string;
hidden: true;
@Output() queryArray = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showForecast() {
    this.queryArray.emit(this.city);
  }
}
