import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: './usuarios-editar.component.html',
  styleUrls: ['./usuarios-editar.component.css']
})
export class UsuariosEditarComponent implements OnInit {
  nombre;
  apellido;
  email;
  pass;
  user:UsuarioModel;

  selected: FormControl = new FormControl(null);
  opc: any;
  descripcion;

 clienteUpdate;
  constructor( router: ActivatedRoute, bd: UserService) { 
    bd.getUser(router.snapshot.params.id).subscribe((resp) => {
      console.log(resp);
      this.nombre=resp['nombre'];
      this.apellido=resp['apellido'];
      this.email=resp['acceso']['email'];
      console.log(resp['acceso']['pass'])
    });
  }

  ngOnInit(): void {
    this.selected.valueChanges.subscribe(changes => {
      this.Opciones(changes);
    });
    this.clienteUpdate= new FormGroup({
      nombre             : new FormControl(),
      apellido           : new FormControl(),
      tipo               : new FormControl(),
      correo             : new FormControl(),
      pass               : new FormControl(),
    });
  }

  Opciones(opc) {
    // console.log(opc);
    this.opc;
    if (opc == "1") {
      this.descripcion="Este usuario puede hacer cualquier cosa"
      this.opc = opc;
    } else if (opc == "2") {
      this.descripcion="Este usuario es solo un empleado"
      this.opc = opc;
    } else if (opc == "3") {
      this.descripcion="Este usuario es solo un empleado mas bajo"
    }
  }


  hola(n){
    console.log(n);
    
  }

}
