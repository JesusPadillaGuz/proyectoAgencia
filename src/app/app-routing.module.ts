import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservacionesComponent } from './no-authentication-pages/reservaciones/reservaciones.component';
import { NosotrosComponent } from './authentication-pages/nosotros/nosotros.component';
import { PrincipalComponent } from './no-authentication-pages/principal/principal.component';
import { LoginComponent } from './no-authentication-pages/login/login.component';
import { UsuariosControlComponent } from './authentication-pages/usuarios/usuarios-control/usuarios-control.component';
import { UsuariosEditarComponent } from './authentication-pages/usuarios/usuarios-editar/usuarios-editar.component';
import { UsuariosNuevoComponent } from './authentication-pages/usuarios/usuarios-nuevo/usuarios-nuevo.component';
import { TipoServicioControlComponent } from './authentication-pages/tipoServicio/tipo-servicio-control/tipo-servicio-control.component';
import { TipoServicioNuevoComponent } from './authentication-pages/tipoServicio/tipo-servicio-nuevo/tipo-servicio-nuevo.component';

const routes: Routes = [
  { path: 'principal' , component:  PrincipalComponent},
  { path: 'reservaciones' , component: ReservacionesComponent},
  { path: 'nosotros' , component: NosotrosComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'usuariosControl' , component: UsuariosControlComponent},
  { path: 'usuariosEditar/:id' , component: UsuariosEditarComponent},
  { path: 'usuariosNuevo' , component: UsuariosNuevoComponent}, 
  { path: 'tipoServicioControl' , component: TipoServicioControlComponent},
  /*{ path: 'tipoServicioEditar/:id' , component: UsuariosEditarComponent},*/
  { path: 'tipoServicioNuevo' , component: TipoServicioNuevoComponent},
  { path: '**', redirectTo: 'principal' },
  { path: ' ', pathMatch: 'full', redirectTo: 'principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
