import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios-control',
  templateUrl: './usuarios-control.component.html',
  styleUrls: ['./usuarios-control.component.css']
})
export class UsuariosControlComponent implements OnInit {
  usuario={};
  lista;
   constructor(private bd: UserService) { 
    this.bd.getUsers().subscribe(resp => {
      this.lista = resp;
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
    this.bd.deleteUser(this.usuario['id']).subscribe((resp)=>{
      console.log(resp);
    })
    
  }



}
