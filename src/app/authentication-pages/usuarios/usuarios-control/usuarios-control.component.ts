import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios-control',
  templateUrl: './usuarios-control.component.html',
  styleUrls: ['./usuarios-control.component.css']
})
export class UsuariosControlComponent implements OnInit {
  m1={
    'ID': 1,
    'nombre': 'Andrea1',
    'apellido': 'Delgado1',
    'enabled':true,
    'tipoId': 1,
    'accesoId': 1
  }
  m2={
    'ID': 2,
    'nombre': 'Andrea2',
    'apellido': 'Delgado2',
    'enabled':true,
    'tipoId': 2,
    'accesoId': 2
  }
  usuario={};
  lista;
   constructor(private bd: UserService) { 
    this.bd.getUsers().subscribe(resp => {
      this.lista = resp['results'];
      console.log(this.lista);
    });
  }

  ngOnInit(): void {
  }

  auxUsuario(aux={}){
    this.usuario=aux;
   // console.log(this.prueba);
  }
 
  onDelete(){
    for (let index in this.lista) {
      if (this.lista[index].ID==this.usuario['ID']) {
        this.lista.splice(Number(index),1);
      }
    }
    console.log(this.lista);
  }



}
