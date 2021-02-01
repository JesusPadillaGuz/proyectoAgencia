import { ServicioModel } from './Servicio.model';
import { ClienteModel } from './Cliente.model';
import { UsuarioModel } from './Usuario.model';
export class ContratoModel{
    ID: number;
    Fecha_Inicio_Contrato: Date;
    UsuarioID: number;
    Usuario:UsuarioModel;
    ClienteID:number;
    Cliente: ClienteModel;
    ServicioID:number;
    Servicio:ServicioModel;
    Documento_ContratoURL: string;
    CostoTotal: number;
    Politicas_Pago: string;
    Fecha_LimPago: Date;
    Anticipo: number;
    Folio_Contrato: string;
    Notas: string;
    Localizador: string;
    Saldo_Restante:number;
    IsEnabled: boolean;
}