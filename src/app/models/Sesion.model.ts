import { UsuarioModel } from './Usuario.model';
export class SesionModel{
    _ID: number;
    _Token: string;
    _Fecha_Creacion: Date;
    _IsEnabled: boolean;
    _UsuarioID: number;
    _Usuario: UsuarioModel;
  
}