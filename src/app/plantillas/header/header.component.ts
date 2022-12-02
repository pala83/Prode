import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    logueado: string | null = null;
    constructor(private router:Router){}

    ngOnInit(): void {
        this.logueado = localStorage.getItem("usuario");
    }

    cerrarSesion(): boolean{
        localStorage.removeItem("usuario");
        this.router.navigate(["/home"]);
        location.reload();
        return false;
    }

}
