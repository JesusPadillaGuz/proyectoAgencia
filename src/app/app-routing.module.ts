import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservacionesComponent } from './authentication-pages/reservaciones/reservaciones.component';

const routes: Routes = [
  { path: 'reservaciones' , component: ReservacionesComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
