import { RacesDataService } from '../../../service/races-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

export type RacesResult = Record<string, string>;

@Component({
  selector: 'app-races-results',
  templateUrl: './races-results.component.html',
  styleUrls: ['./races-results.component.scss']
})
export class RacesResultsComponent implements OnInit, OnDestroy {
  public racesResult: RacesResult = {};
  private subscription: Subscription = null;

  constructor(private racesDataService: RacesDataService) { }

  ngOnInit(): void {
    this.subscription = this.racesDataService.getRacesInformationsDetection()
      .subscribe((races: RacesResult) => { this.racesResult = races; });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
