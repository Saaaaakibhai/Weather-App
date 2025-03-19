import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  private baseUrl = "http://localost:8080"
  get(): Observable<Weather[]>{
    return this.httpClient.get<Weather[]>(`${this.baseUrl}`);
  }
}
