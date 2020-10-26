import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MascotaService} from '../../services/mascota.service';
import {PropietarioService} from '../../services/propietario.service';  
import { Mascota } from '../../models/mascota';
import { Propietario } from '../../models/propietario';
import { CitaService } from '../../services/cita.service';
import { Cita } from '../../models/cita';
import { Consulta } from '../../models/consulta';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'app-cita',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  
  constructor(public mascotaservice:MascotaService,
    public propietarioService:PropietarioService,
    public citasService:CitaService,
    public consultaService:ConsultaService) { }
 mascotaList:Mascota[];
 cantidadMascotas:number;
 propietarioList:Propietario[];
 cantidadPropietarios:number;
 citaList:Cita[];
 cantidadCitas:number;
 consultaList: Consulta[];
 cantidadConsultas:number;

  ListarMascotas(){
    return this.mascotaservice.getdatos()
      .snapshotChanges().subscribe(item => {
        this.mascotaList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.mascotaList.push(x as Mascota);
        });
        console.log(this.mascotaList);
        this.cantidadMascotas=this.mascotaList.length;
      });
  }
  ListarPropietarios(){
    return this.propietarioService.getPropietario()
      .snapshotChanges().subscribe(item => {
        this.propietarioList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.propietarioList.push(x as Propietario);
        });
        this.cantidadPropietarios=this.propietarioList.length;
      });
  }

  ListarCitas(){
    return this.citasService.getdatos()
      .snapshotChanges().subscribe(item => {
        this.citaList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.citaList.push(x as Cita);
        });
        this.cantidadCitas = this.citaList.length;
      });
  }

  ListarConsultas(){
    return this.consultaService.getdatos()
      .snapshotChanges().subscribe(item => {
        this.consultaList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.consultaList.push(x as Consulta);
        });
        this.cantidadConsultas = this.consultaList.length;
      });
  }

  ngOnInit(){
    this.ListarMascotas();
    this.ListarPropietarios();
    this.ListarCitas();
    this.ListarConsultas();
  }
}
