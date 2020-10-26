import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { Mascota } from './../../models/mascota';
import {MascotaService} from '../../services/mascota.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  mascotaList: Mascota[];
  Nombre_mascota:string;
  Especie:string;
  Raza:string;
  Color:string;
  Fecha_nacimiento:string;
  Nombre_propietario:string;
 

  constructor(
    public mascotaservice: MascotaService
  ) { }

  ngOnInit(){
    return this.mascotaservice.getdatos()
      .snapshotChanges().subscribe(item => {
        this.mascotaList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.mascotaList.push(x as Mascota);
        });
        console.log(this.mascotaList);
      });
  }

  onSubmit(){
    this.mascotaservice.insertdatos(this.Nombre_mascota,this.Raza,this.Color,this.Especie,this.Fecha_nacimiento,this.Nombre_propietario);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Mascota Ingresada', 
      showConfirmButton: false,
      timer: 1500
    })
    this.resetForm();
  }
resetForm() {
  this.Nombre_mascota ='';
  this.Raza = '';
  this.Color = '';
  this.Especie= '';
  this.Fecha_nacimiento='';
  this.Nombre_propietario = '';
  }

}
