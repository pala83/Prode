import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

    constructor(private userDataService:UserService, private router:Router) {}

    ngOnInit(): void {
        
    }

    registerUser(nick:string, pass:string): boolean{
        let user: User = {
            name: nick,
            password: pass,
            group: null
        }
        localStorage.setItem("usuario", user.name);
        this.userDataService.addUser(user)
            .subscribe(respuesta=>{
                console.log("usuario cargado!!!");
            });
        this.router.navigate(["/home"]);
        setTimeout(()=>{
            location.reload();
        }, 1000);
        return false;
    }

}
