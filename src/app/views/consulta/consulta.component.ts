import { Component, OnInit } from '@angular/core';
import{CheckboxControlValueAccessor, CheckboxRequiredValidator, NgForm} from '@angular/forms';
//Servicios
import{ConsultaService} from '../../services/consulta.service';
import{ServicioService} from '../../services/servicio.service';
import{MascotaService} from '../../services/mascota.service';
//Class
import{Consulta} from '../../models/consulta';
import{Servicio} from '../../models/servicio';
import{Mascota} from '../../models/mascota';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  consultaList:Consulta[];
  servicioList:Servicio[];
  mascotaList:Mascota[];
  mascotaListAux:Mascota[];
  sumaCostos:number[];
  Fecha:string;
    Propietario:string;
    Mascota:string;
    Servicio:string;
    Medicamentos:string;
    Motivo:string;
    Diagnostico:string;
    Total:number;
    valores = 0;
  constructor(
    public consultaservice:ConsultaService,
    public servicioService:ServicioService,
    public mascotaService:MascotaService
  ) { }
  ngOnInit(){
  this.ObtenerConsultas();
  this.ObtenerServicios();
  this.ObtenerMascotas();
  }
  onSubmit(){
    this.consultaservice.insertarDatos(this.Fecha,this.Propietario,this.Mascota,this.Servicio,this.Medicamentos,this.Motivo,this.Diagnostico,this.Total)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Consulta Ingresada', 
      showConfirmButton: false,
      timer: 1500
    })
    this.resetForm();
  }
  resetForm(){
    this.Fecha='';
    this.Propietario='';
    this.Mascota='';
    this.Servicio='';
    this.Medicamentos='';
    this.Motivo='';
    this.Diagnostico='';
    this.Total= 0;
    
  }

  ObtenerServicios(){
    return this.servicioService.getServicio()
      .snapshotChanges().subscribe(item => {
        this.servicioList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.servicioList.push(x as Servicio);
        });
      });
  }

  ObtenerConsultas(){
    return this.consultaservice.getdatos()
    .snapshotChanges().subscribe(item => {
      this.consultaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.consultaList.push(x as Consulta);
      });
    });
  }

  FiltrarMascotas(){
    this.mascotaListAux = this.mascotaList.filter(data =>{
    return  data.Nombre_propietario.toString().trim()==this.Propietario;
    })

    if(this.mascotaListAux.length==0){
      this.mascotaService.getdatos()
    .snapshotChanges().subscribe(item => {
      this.mascotaListAux = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.mascotaListAux.push(x as Mascota);
      });
    });
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Registro No Encontrado',
      showConfirmButton: false,
      timer: 1500
    })
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Encontrado',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  ObtenerMascotas(){
    return this.mascotaService.getdatos()
    .snapshotChanges().subscribe(item => {
      this.mascotaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.mascotaList.push(x as Mascota);
      });
    });
  }



}
