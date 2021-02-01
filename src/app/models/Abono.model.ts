import { ContratoModel } from './Contrato.model';
import { UsuarioModel } from './Usuario.model';
import { ClienteModel } from './Cliente.model';
export class AbonoModel{
    ID: number;
    Cantidad_Abono: number;
    ContratoID: number;
    Contrato: ContratoModel;
    Folio_Abono: number;
    Notas: string;
    Saldo_Anterior: number;
}