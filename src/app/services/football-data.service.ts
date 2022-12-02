import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FootballData } from '../interfaces/football-data';

const URL: string = 'https://fifa-2022-schedule-and-stats.p.rapidapi.com/schedule?date=2022-12-01&utc_offset=-3';
const ApiKey: string = '0fb294c1c0msh94c2fa3771795edp11fda0jsnbc2d93f797ef';
const ApiHost: string = 'fifa-2022-schedule-and-stats.p.rapidapi.com';

@Injectable({
    providedIn: 'root'
})
export class FootballDataService {

    constructor(private http: HttpClient) { }

    public getAll() {
        const header = new HttpHeaders()
        .set("content-type", "application/json")
        .set("X-RapidAPI-Key", ApiKey)
        .set("X-RapidApi-Host", ApiHost)
        return this.http.get(URL, {"headers":header});
    }
}