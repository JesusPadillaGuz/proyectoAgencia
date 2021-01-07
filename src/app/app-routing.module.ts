import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservacionesComponent } from './authentication-pages/reservaciones/reservaciones.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: 'principal' , component:  PrincipalComponent},
  { path: 'reservaciones' , component: ReservacionesComponent},
  { path: 'nosotros' , component: NosotrosComponent},
  { path: '**', redirectTo: 'principal' },
  { path: ' ', pathMatch: 'full', redirectTo: 'principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
