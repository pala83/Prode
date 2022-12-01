import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { FootballTableComponent } from './plantillas/football-table/football-table.component';
import { GroupTableComponent } from './plantillas/group-table/group-table.component';
import { PlayerFormComponent } from './plantillas/player-form/player-form.component';
import { SesionComponent } from './vistas/sesion/sesion.component';
import { RegisterComponent } from './plantillas/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    
    FootballTableComponent,
    GroupTableComponent,
    PlayerFormComponent,
    SesionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
