import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {Propietario} from '../../models/propietario';
import {PropietarioService} from '../../services/propietario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css']
})
export class PropietariosComponent implements OnInit {
propietarioList: Propietario[];
Nombre:string;
Apellido:string;
DUI:string;
Direccion:string;
Telefono:string;
Correo:string;
Password:string;
  constructor(public propietarioService:PropietarioService) { }

  ngOnInit(){
    return this.propietarioService.getPropietario()
    .snapshotChanges().subscribe(item => {
      this.propietarioList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.propietarioList.push(x as Propietario);
      });
      console.log(this.propietarioList);
    });
  }

  Registrar(){
    this.propietarioService.insertPropietario(this.Nombre,this.Apellido,this.DUI,this.Direccion,this.Telefono,this.Correo,this.Password);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Propietario de Mascota Ingresado', 
      showConfirmButton: false,
      timer: 1500
    })
    this.resetForm();
  }
resetForm() {
  this.Nombre ='';
  this.Telefono = '';
  this.DUI = '';
  this.Direccion = '';
  this.Telefono = '';
  this.Correo = '';
  this.Password = '';
  }

}
