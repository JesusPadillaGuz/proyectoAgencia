import { ServicioModel } from './Servicio.model';
export class PaqueteModel{
    _ID: number;
    _Nombre: string;
    _IsEnabled: boolean;
    _Descripcion: string;
    _ServicioID: number;
    _Servicio: ServicioModel;
    _ImagenesURL: string;
    _Precio_Ad: number;
    _Precio_Jr: number;
    _Precio_Mr: number;
    _Notas: string;
}