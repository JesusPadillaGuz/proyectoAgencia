import { ContratoModel } from './Contrato.model';
import { UsuarioModel } from './Usuario.model';
import { ClienteModel } from './Cliente.model';
export class AbonoModel{
    _ID: number;
    _Cantidad_Abono: number;
    _ContratoID: number;
    _Contrato: ContratoModel;
    _Folio_Abono: number;
    _Notas: string;
    _Saldo_Anterior: number;
}