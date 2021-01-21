import { Component, OnInit } from '@angular/core';
import { TipoServicioService } from 'src/app/services/tipo-servicio.service';

@Component({
  selector: 'app-tipo-servicio-control',
  templateUrl: './tipo-servicio-control.component.html',
  styleUrls: ['./tipo-servicio-control.component.css']
})
export class TipoServicioControlComponent implements OnInit {

  tipoServicioModal={};
  listaTipoServicio;

   constructor(private tipoServicioService: TipoServicioService) { 
    this.tipoServicioService.getServiceTypes().subscribe(resp => {
      this.listaTipoServicio = resp;
      console.log(this.listaTipoServicio);
    });
  }

  ngOnInit(): void {
  }

  auxTipoServicio(aux={}){
    this.tipoServicioModal=aux;
   // console.log(this.prueba);
  }
 
  onDelete(){
    for (let index in this.listaTipoServicio) {
      if (this.listaTipoServicio[index].ID==this.tipoServicioModal['ID']) {
        this.listaTipoServicio.splice(Number(index),1);
      }
    }
    this.tipoServicioService.deleteServiceType(this.tipoServicioModal['id']).subscribe((resp)=>{
      console.log(resp);
    })
    
  }
}
