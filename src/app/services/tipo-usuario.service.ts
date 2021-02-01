import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {
  baseUrl = 'https://localhost:44393/';
  // baseUrl = 'https://localhost:5001/';
  constructor( private httpClient: HttpClient) { }

  getUserTypes(){
    return this.httpClient.get(this.baseUrl+'api/TiposUsuario');
  }
  getUserTypeById(id){
    return this.httpClient.get(this.baseUrl+'api/TiposUsuario/'+id);
  }
  deleteUserType(id){
    return this.httpClient.delete(this.baseUrl+'api/TiposUsuario/'+id);
  }
  newUserType(usertype){
  // console.log("este es el usuario desde el service",user);
    return this.httpClient.post(this.baseUrl+'api/TiposUsuario',usertype);
  }
}
