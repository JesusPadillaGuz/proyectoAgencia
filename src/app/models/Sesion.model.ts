import { UsuarioModel } from './Usuario.model';
export class SesionModel{
    ID: number;
    Token: string;
    Fecha_Creacion: Date;
    IsEnabled: boolean;
    UsuarioID: number;
    Usuario: UsuarioModel;
  
}