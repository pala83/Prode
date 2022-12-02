import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { FootballTableComponent } from './plantillas/football-table/football-table.component';
import { GroupTableComponent } from './plantillas/group-table/group-table.component';
import { PlayerFormComponent } from './plantillas/player-form/player-form.component';
import { RegisterComponent } from './plantillas/register/register.component';
import { LoginComponent } from "./plantillas/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    
    FootballTableComponent,
    GroupTableComponent,
    PlayerFormComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
