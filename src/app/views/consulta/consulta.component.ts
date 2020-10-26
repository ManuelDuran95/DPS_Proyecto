import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
//Servicios
import{ConsultaService} from '../../services/consulta.service';
//Class
import{Consulta} from '../../models/consulta';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  consultaList:Consulta[];
  Fecha:string;
    Propietario:string;
    Mascota:string;
    Servicio:string;
    Medicamentos:string;
    Motivo:string;
    Diagnostico:string;
    Total:number;

  constructor(
    public consultaservice:ConsultaService,

  ) { }

  ngOnInit(){
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
    this.Total=0;
    
  }

}
