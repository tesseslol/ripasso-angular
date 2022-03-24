import { RacesServiceService } from '../../../service/races-service.service';
import { Component, OnInit } from '@angular/core';
import { RacesDataService } from '../../../service/races-data.service';
import { Router } from '@angular/router';

export type Races = Record<string, string>;

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {

  public currentRaces: Races[] = [];

  constructor(private racesServiceService: RacesServiceService, private racesDataService: RacesDataService, private router: Router) { }

  ngOnInit(): void {
    this.racesServiceService.getRaces().subscribe(
      (next: Races[]) => {
        this.currentRaces = next;
      },
      () => {
        console.error(`Errore nell'ottenimento delle corse`);
      }
    );
  }

  getRacesInformations(racesId: number): void {
    this.racesDataService.refreshRacesInformations(racesId);
    this.router.navigate(['/race/' + racesId]);
  }
}
