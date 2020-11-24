import { Component, OnInit } from '@angular/core';
import { Cita } from './../../models/cita';
import {CitaService} from '../../services/cita.service';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cita',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  citaList: Cita[];
  ObjetoCita:Cita[];
  Num:number;
  Fecha:string;
  Hora:string;
  Motivo:string;
  Estado:string;
  Mascota:string;
  Propietario:string;
  
  constructor(
    public citaservice: CitaService
  ) { }

  ngOnInit(){
    return this.citaservice.getdatos()
      .snapshotChanges().subscribe(item => {
        this.citaList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.citaList.push(x as Cita);
        });
        this.Num = this.citaList.length + 1;
      });
  }
  onSubmit(){
    this.Estado = "Sin verificar";
    this.citaservice.insertdatos(this.Num,this.Fecha,this.Hora,this.Motivo,this.Estado,this.Mascota,this.Propietario);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cita Ingresada', 
      showConfirmButton: false,
      timer: 1500
    })
    this.resetForm();
  }
  resetForm() {
    this.Num =0;
    this.Fecha = '';
    this.Hora = '';
    this.Motivo= '';
    this.Estado='';
    this.Mascota = '';
    this.Propietario = '';
    
    }


    onDelete($key: string) {
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
          this.citaservice.deleteCita($key);
          Swal.fire(
            '¡Eliminado!',
            'El registro ha sido eliminado.',
            'success'
          )
        }
      })  
  }

}
