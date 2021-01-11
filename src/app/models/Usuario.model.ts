import { AccesoModel } from './Acceso.model';
import { TipoUsuarioModel } from "./TipoUsuario.model";

export class UsuarioModel{
    _ID: number;
    _Nombre: string;
    _Apellido: string;
    _IsEnabled: boolean;
    _TipoUsuarioID: number;
    _TipoUsuario: TipoUsuarioModel;
    _AccesoID: number;
    _Acceso:AccesoModel;
}