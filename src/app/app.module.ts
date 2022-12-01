import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './vistas/home/home.component';
import { NavComponent } from './plantillas/nav/nav.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { FootballTableComponent } from './plantillas/football-table/football-table.component';
import { GroupTableComponent } from './plantillas/group-table/group-table.component';
import { SessionFormComponent } from './plantillas/session-form/session-form.component';
import { PlayerFormComponent } from './plantillas/player-form/player-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    FootballTableComponent,
    GroupTableComponent,
    SessionFormComponent,
    PlayerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
