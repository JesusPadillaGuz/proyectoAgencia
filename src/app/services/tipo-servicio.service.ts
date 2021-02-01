import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoServicioModel } from '../models/TipoServicio.model';

@Injectable({
  providedIn: 'root'
})
export class TipoServicioService {
  baseUrl = 'https://localhost:44393/';
 // baseUrl = 'https://localhost:5001/';

  constructor( private httpClient: HttpClient) { }

  

  getServiceTypes(){
      return this.httpClient.get(this.baseUrl+'api/TiposServicio');
  }
  getServiceTypeById(id){
    return this.httpClient.get(this.baseUrl+'api/TiposServicio/'+id);
  }
  deleteServiceType(id){
    return this.httpClient.delete(this.baseUrl+'api/TiposServicio/'+id);
  }
  newServiceType(tipoServicio: TipoServicioModel){
    return this.httpClient.post(this.baseUrl+'api/TiposServicio',tipoServicio);
  }
}
