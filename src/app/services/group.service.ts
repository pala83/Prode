import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Group } from "../interfaces/group";

const URL = "https://6387a585d9b24b1be3f672a0.mockapi.io/groups";

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(private http:HttpClient) {}

    public getAll(): Observable<Group[]>{
        return this.http.get<Group[]>(URL);
    }
}