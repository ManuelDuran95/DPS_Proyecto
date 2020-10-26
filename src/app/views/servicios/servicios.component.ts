import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {Servicio} from '../../models/servicio';
import {ServicioService} from '../../services/servicio.service';

import Swal from 'sweetalert2';

@Component({ 
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(public servicioService:ServicioService) { }
servicioList: Servicio[];
Descripcion:string;
Costo:number;

  ngOnInit(){
    return this.servicioService.getServicio().snapshotChanges().subscribe(item => {
      this.servicioList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.servicioList.push(x as Servicio);
      });
    });
  }

  Registrar() {
    this.servicioService.insertServicio(this.Descripcion,this.Costo);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Servicio Ingresado', 
      showConfirmButton: false,
      timer: 1500
    })
    this.resetForm();
  }

  Actualizar(Descripcion:string,Costo:number){
    this.servicioService.updateServicio(this.servicioService.selectedServicio.$key,
      Descripcion,
      Costo);
  Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Servicio Actualizado',
  showConfirmButton: false,
  timer: 1500
})
this.resetForm();
  } 

  Editar(servicio:Servicio) {
    this.servicioService.selectedServicio = Object.assign({}, servicio);
  }

  Borrar($key: string) {
    Swal.fire({
      title: '¿Estás seguro de eliminar?',
      text: "Una vez eliminado no podrás recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioService.deleteServicio($key);
        Swal.fire(
          '¡Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )
      }
    })
  }

  resetForm() {
    this.Descripcion='';
    this.Costo = null;
    this.servicioService.selectedServicio = new Servicio();
  }

}
