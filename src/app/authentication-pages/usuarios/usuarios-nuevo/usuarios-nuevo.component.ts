import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccesoModel } from 'src/app/models/Acceso.model';
import { TipoUsuarioModel } from 'src/app/models/TipoUsuario.model';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import { TipoUsuarioService } from 'src/app/services/tipo-usuario.service';
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
  usuarioNuevo:FormGroup;
  ListaTiposUsuario;
  

  selected: FormControl = new FormControl(null);
  opc: any; 
  descripcion;


  constructor(private userService:UserService, private tipoUsuarioService: TipoUsuarioService) { 
    this.tipoUsuarioService.getUserTypes().subscribe(resp => {
      this.ListaTiposUsuario = resp;
      console.log(this.ListaTiposUsuario);
    });
  }


 
  ngOnInit(): void {
    this.user.Acceso= new AccesoModel();
   /* this.selected.valueChanges.subscribe(changes => {
      this.Opciones(changes);
    });*/
    this.usuarioNuevo= new FormGroup({
      nombre             : new FormControl(),
      apellido           : new FormControl(),
      tipoUsuario        : new FormControl(),
      correo             : new FormControl(),
      pass               : new FormControl(),
    });
  }

  onSubmit(usuarioFormulario){
   
    this.tipoUsuario.IsEnabled=true;
    this.user.Nombre=usuarioFormulario['nombre'];
    this.user.Apellido=usuarioFormulario['apellido'];
    this.user.IsEnabled=true;
    this.user.Acceso.Email=usuarioFormulario['correo'];
   this.user.TipoUsuarioID=usuarioFormulario['tipoUsuario'];
    this.userService.newUser(this.user).subscribe((resp)=>{
      console.log(resp);
    })
  }


  
  /*Opciones(opc) {
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
  }*/

}
