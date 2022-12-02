import { Component, OnInit } from '@angular/core';
import { FootballData } from '../../interfaces/football-data';
import { FootballDataService } from '../../services/football-data.service';

@Component({
  selector: 'app-football-table',
  templateUrl: './football-table.component.html',
  styleUrls: ['./football-table.component.scss'],
})
export class FootballTableComponent implements OnInit {
  footballData: FootballData | null = null;

  constructor(private footballDataService: FootballDataService) {}

  ngOnInit(): void {
    this.footballDataService
      .getAll()
      .subscribe((footballData: FootballData) => {
        this.footballData = footballData;
        console.log(this.footballData);
      });
  }
}
