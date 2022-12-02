import { Component, OnInit } from '@angular/core';
import { FootballData } from 'src/app/interfaces/football-data';
import { FootballDataService } from 'src/app/services/football-data.service';

@Component({
    selector: 'app-football-table',
    templateUrl: './football-table.component.html',
    styleUrls: ['./football-table.component.scss']
})
export class FootballTableComponent implements OnInit {

    partido: FootballData[] = [];

    constructor(private footballDataService: FootballDataService) { }

    ngOnInit(): void {
        this.footballDataService.getAll()
            .subscribe((user) => console.log(user));
    }

}
