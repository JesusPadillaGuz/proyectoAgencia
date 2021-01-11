import { TipoServicioModel } from "./TipoServicio.model";

export class ServicioModel{
    _ID: number;
    _Descripcion: string;
    _Fecha_Inicio: Date;
    _Fecha_Fin: Date;
    _TipoServicioID: number;
    _TipoServicio: TipoServicioModel;
}