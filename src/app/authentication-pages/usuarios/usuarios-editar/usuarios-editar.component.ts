import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: './usuarios-editar.component.html',
  styleUrls: ['./usuarios-editar.component.css']
})
export class UsuariosEditarComponent implements OnInit {
 clienteUpdate;
  constructor( router: ActivatedRoute) { 
    console.log(router.snapshot.params.id);
  }

  ngOnInit(): void {
    this.clienteUpdate= new FormGroup({
      nombre             : new FormControl(),
      apellido           : new FormControl(),
      enabled            : new FormControl(),
      tipoUsuarioID      : new FormControl(),
      accesoID           : new FormControl(),
    });
  }

}
