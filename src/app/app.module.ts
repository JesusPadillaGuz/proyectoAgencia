import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservacionesComponent } from './no-authentication-pages/reservaciones/reservaciones.component';
import { NosotrosComponent } from './authentication-pages/nosotros/nosotros.component';
import { PrincipalComponent } from './no-authentication-pages/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReservacionesComponent,
    NosotrosComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
