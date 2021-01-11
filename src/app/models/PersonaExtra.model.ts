import { TipoPersonaModel } from './TipoPersona.model';
import { ContratoModel } from './Contrato.model';
export class PersonaExtraModel{
    _ID: number;
    _Edad:number;
    _ContratoID:number;
    _Contrato: ContratoModel;
    _TipoPersonaID:number;
    _TipoPersona: TipoPersonaModel;
}