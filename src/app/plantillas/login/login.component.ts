import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    users: User[] = [];
    error: boolean = false;

    constructor(private userDataService: UserService, private router:Router) {}

    ngOnInit(): void {
        this.userDataService.getAll()
            .subscribe((user)=>{this.users = user});
    }

    loginUser(nick:string, pass:string): boolean{
        let usuario = this.users.find(user=>user.name===nick);
        if(usuario && usuario.password === pass){
            localStorage.setItem("usuario", usuario.name);
            this.error == false;
            this.router.navigate(["/home"]);
            setTimeout(()=>{
                location.reload();
            }, 1000)
        }
        else
            this.error = true;
        return false;
    }
}
