import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccesoModel } from 'src/app/models/Acceso.model';
import { TipoUsuarioModel } from 'src/app/models/TipoUsuario.model';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios-nuevo',
  templateUrl: './usuarios-nuevo.component.html',
  styleUrls: ['./usuarios-nuevo.component.css']
})
export class UsuariosNuevoComponent implements OnInit {
  user=new UsuarioModel;
  acceso= new AccesoModel;
  tipoUsuario=new TipoUsuarioModel;
  clienteNuevo:FormGroup;

  selected: FormControl = new FormControl(null);
  opc: any;
  descripcion;


  constructor(private bd:UserService) { }


 
  ngOnInit(): void {
    this.selected.valueChanges.subscribe(changes => {
      this.Opciones(changes);
    });
    this.clienteNuevo= new FormGroup({
      nombre             : new FormControl(),
      apellido           : new FormControl(),
      tipo               : new FormControl(),
      correo             : new FormControl(),
      pass               : new FormControl(),
    });
  }

  onSubmit(info){
    this.tipoUsuario._Descripcion="Prueba";
    this.tipoUsuario._IsEnabled=true;
    this.tipoUsuario._Nombre="Admin";

    this.acceso._Email=info['correo'];
    info['tipo']=this.opc;
    this.user._Nombre=info['nombre'];
    this.user._Apellido=info['apellido'];
    this.user._IsEnabled=true;
   // this.user._TipoUsuario=this.tipoUsuario;
    //this.user._Acceso=this.acceso;
    this.user._AccesoID=1;
    this.user._TipoUsuarioID=1;
    console.log(this.user)
    this.bd.newUser(this.user).subscribe((resp)=>{
      console.log(resp);
    })
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
      this.opc = opc;
    }else{
      this.opc = 0;
    }
  }

}
