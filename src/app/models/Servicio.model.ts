import { TipoServicioModel } from "./TipoServicio.model";

export class ServicioModel{
    ID: number;
    Descripcion: string;
    Fecha_Inicio: Date;
    Fecha_Fin: Date;
    TipoServicioID: number;
    TipoServicio: TipoServicioModel;
}