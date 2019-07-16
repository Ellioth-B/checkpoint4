import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NumeroComponent } from './numero/numero.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { AccesComponent } from './acces/acces.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReserverComponent } from './reserver/reserver.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NumeroComponent,
    AnimauxComponent,
    AccesComponent,
    NavbarComponent,
    FooterComponent,
    ReserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
