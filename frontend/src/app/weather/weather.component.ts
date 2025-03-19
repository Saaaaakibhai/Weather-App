import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})

export class WeatherComponent {
  weather: Weather[] = [];
  constructor(private weatherService: WeatherService) { }
  ngOnInit() {
    this.getWeather();
  }
  getWeather() {
    this.weatherService.get().subscribe(data => {
      this.weather = data;
    })
    
  }

}
