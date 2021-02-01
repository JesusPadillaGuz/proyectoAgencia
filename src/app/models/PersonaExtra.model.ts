import { TipoPersonaModel } from './TipoPersona.model';
import { ContratoModel } from './Contrato.model';
export class PersonaExtraModel{
    ID: number;
    Edad:number;
    ContratoID:number;
    Contrato: ContratoModel;
    TipoPersonaID:number;
    TipoPersona: TipoPersonaModel;
}