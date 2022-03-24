import { RacesServiceService } from './races-service.service';
import { RacesResult } from '../components/view/races-results/races-results.component';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class RacesDataService {

  constructor(private racesServiceService: RacesServiceService) { }
  private _racesInformation: RacesResult;
  private racesInformationSubject: Subject<RacesResult> = new Subject();

  setRacesInformations(racesInformation: RacesResult): void {
    this._racesInformation = racesInformation;
    this.racesInformationSubject.next(racesInformation);
  }

  getRacesInformations(): RacesResult {
    return this._racesInformation;
  }

  getRacesInformationsDetection(): Subject<RacesResult> {
    return this.racesInformationSubject;
  }

  refreshRacesInformations(racesId: number): void {
    this.racesServiceService.getRacesInformations(racesId)
      .subscribe(racesInformation => this.setRacesInformations(racesInformation));
  }
}
