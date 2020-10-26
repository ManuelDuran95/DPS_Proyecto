import { Component, OnInit } from '@angular/core';
import { Cita } from './../../models/cita';
import {CitaService} from '../../services/cita.service';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-cita',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  citaList: Cita[];
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
      });
  }
  onSubmit(){
    this.citaservice.insertdatos(this.Num,this.Fecha,this.Hora,this.Motivo,this.Estado,this.Mascota,this.Propietario);
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
      this.citaservice.deleteCita($key);    
  }

}
