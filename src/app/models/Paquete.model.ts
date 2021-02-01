import { ServicioModel } from './Servicio.model';
export class PaqueteModel{
    ID: number;
    Nombre: string;
    IsEnabled: boolean;
    Descripcion: string;
    ServicioID: number;
    Servicio: ServicioModel;
    ImagenesURL: string;
    Precio_Ad: number;
    Precio_Jr: number;
    Precio_Mr: number;
    Notas: string;
}