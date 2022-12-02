import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FootballData } from '../interfaces/football-data';

const ApiKey: string = '0fb294c1c0msh94c2fa3771795edp11fda0jsnbc2d93f797ef';
const ApiHost: string = 'fifa-2022-schedule-and-stats.p.rapidapi.com';

@Injectable({
    providedIn: 'root'
})
export class FootballDataService {
    
    private URL: string;

    constructor(private http: HttpClient) {
        this.URL = `https://fifa-2022-schedule-and-stats.p.rapidapi.com/schedule?date=${this.fechaDeHoy()}&utc_offset=-3`
    }

    public getAll(): Observable<FootballData> {
        const header = new HttpHeaders()
        .set("content-type", "application/json")
        .set("X-RapidAPI-Key", ApiKey)
        .set("X-RapidApi-Host", ApiHost)
        return this.http.get<FootballData>(this.URL, {"headers":header});
    }

    private fechaDeHoy(): string{
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        let retorno: string = yyyy + '-' + mm + '/' + dd;
        return retorno;
    }
}