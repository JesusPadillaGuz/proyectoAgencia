import { ServicioModel } from './Servicio.model';
import { ClienteModel } from './Cliente.model';
import { UsuarioModel } from './Usuario.model';
export class ContratoModel{
    _ID: number;
    _Fecha_Inicio_Contrato: Date;
    _UsuarioID: number;
    _Usuario:UsuarioModel;
    _ClienteID:number;
    _Cliente: ClienteModel;
    _ServicioID:number;
    _Servicio:ServicioModel;
    _Documento_ContratoURL: string;
    _CostoTotal: number;
    _Politicas_Pago: string;
    _Fecha_LimPago: Date;
    _Anticipo: number;
    _Folio_Contrato: string;
    _Notas: string;
    _Localizador: string;
    _Saldo_Restante:number;
    _IsEnabled: boolean;
}