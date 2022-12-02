import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from "../interfaces/user";

const URL = "https://6387a585d9b24b1be3f672a0.mockapi.io/users";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http:HttpClient) {}

    public getAll(): Observable<User[]>{
        return this.http.get<User[]>(URL);
    }

    public addUser(user: User){
        return this.http.post(URL, user);
    }
}
