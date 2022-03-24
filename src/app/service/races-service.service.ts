import { Races } from '../components/view/races/races.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { RacesResult } from '../components/view/races-results/races-results.component';

@Injectable({
  providedIn: 'root'
})
export class RacesServiceService {

  constructor(private httpClient: HttpClient) { }

  getRaces(): Observable<Races[]> {
    return this.httpClient.get<Races[]>('https://mocki.io/v1/db8238d7-98fb-4807-adbf-739c422ce1f8');
  }

  getRacesInformations(races: number): Observable<RacesResult> {
    return this.httpClient.get<RacesResult>(`https://mocki.io/v1/c6768e21-d6b6-4d81-be71-e4761f2525fc?stato=${races}`);
  }
}
