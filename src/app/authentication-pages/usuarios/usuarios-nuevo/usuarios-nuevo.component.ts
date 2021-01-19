import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuarios-nuevo',
  templateUrl: './usuarios-nuevo.component.html',
  styleUrls: ['./usuarios-nuevo.component.css']
})
export class UsuariosNuevoComponent implements OnInit {
  clienteNuevo:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.clienteNuevo= new FormGroup({
      nombre             : new FormControl(),
      apellido           : new FormControl(),
      tipo               : new FormControl(),
      correo             : new FormControl(),
      pass               : new FormControl(),
    });
  }

  onSubmit(info:any){
    console.log(info);
  }

}
