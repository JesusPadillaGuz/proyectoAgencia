import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios-control',
  templateUrl: './usuarios-control.component.html',
  styleUrls: ['./usuarios-control.component.css']
})
export class UsuariosControlComponent implements OnInit {
  usuario={};
  listaUsuarios;

   constructor(private userService: UserService) { 
    this.userService.getUsers().subscribe(resp => {
      this.listaUsuarios = resp;
      console.log(this.listaUsuarios);
    });
  }

  ngOnInit(): void {
  }

  auxUsuario(aux={}){
    this.usuario=aux;
   // console.log(this.prueba);
  }
 
  onDelete(){
    for (let index in this.listaUsuarios) {
      if (this.listaUsuarios[index].ID==this.usuario['ID']) {
        this.listaUsuarios.splice(Number(index),1);
      }
    }
    this.userService.deleteUser(this.usuario['id']).subscribe((resp)=>{
      console.log(resp);
    })
    
  }



}
