import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common//http';

import { AgmCoreModule } from '@agm/core';

import { TempConverter } from './pipes/TempConverter.pipe';
import { TimeConverter } from './pipes/TimeConverter.pipe';
import { Round } from './pipes/Round.pipe';

import { WeatherService } from './services/weather.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForecastIconComponent } from './dashboard/forecast-icon/forecast-icon.component';
import { SearchComponent } from './search/search.component';
import { ForecastItemComponent } from './dashboard/forecast-item/forecast-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TempConverter,
    TimeConverter,
    Round,
    ForecastIconComponent,
    SearchComponent,
    ForecastItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGhkVb7K-J4Zjy2P3IP_AEsWKtpEEoxeE'
    })
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
