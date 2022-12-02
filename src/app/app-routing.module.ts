import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './vistas/home/home.component';
import { SesionComponent } from './vistas/sesion/sesion.component';
import { GroupsComponent } from './vistas/groups/groups.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sesion',
        component: SesionComponent
    },
    {
        path: 'groups',
        component: GroupsComponent
    },
    /*
    {
        path: 'register',
        component: ProdeAddPlayerComponent
    },
    {
        path: 'login',
        component: ProdeLoginComponent
    }
    */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SesionComponent, GroupsComponent];
