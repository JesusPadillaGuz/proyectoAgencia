import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservacionesComponent } from './no-authentication-pages/reservaciones/reservaciones.component';
import { NosotrosComponent } from './authentication-pages/nosotros/nosotros.component';
import { PrincipalComponent } from './no-authentication-pages/principal/principal.component';
import { LoginComponent } from './no-authentication-pages/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



var firebaseConfig = {
  apiKey: "AIzaSyDe-GSZbvXv2HHiccHVnlQ-XHhgTib3III",
  authDomain: "providencetravels-be100.firebaseapp.com",
  projectId: "providencetravels-be100",
  storageBucket: "providencetravels-be100.appspot.com",
  messagingSenderId: "553916489568",
  appId: "1:553916489568:web:088f1f955a9473123c8805"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReservacionesComponent,
    NosotrosComponent,
    PrincipalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, // auth
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
