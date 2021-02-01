import { AccesoModel } from './Acceso.model';
import { TipoUsuarioModel } from "./TipoUsuario.model";

export class UsuarioModel{
    ID: number;
    Nombre: string;
    Apellido: string;
    IsEnabled: boolean;
    TipoUsuarioID: number;
    TipoUsuario: TipoUsuarioModel;
    AccesoID: number;
    Acceso:AccesoModel;
}