import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Consulta} from '../models/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  consultaList:AngularFireList<any>;
  


  constructor(private firebase:AngularFireDatabase) { }
  getdatos(){
    return this.consultaList=this.firebase.list('consultas');

  }
  insertarDatos(fecha:string,propietario:string,mascota:string,servicio:string,medicamentos:string,motivo:string,diagnostico:string,total:number){
    this.consultaList.push({
      Fecha:fecha,
      Propietario:propietario,
      Mascota:mascota,
      Servicio:servicio,
      Medicamentos:medicamentos,
      Motivo:motivo,
      Diagnostico:diagnostico,
      Total:total
    }); 

  }
  updateConsulta(consulta:Consulta){
    this.consultaList.update(consulta.$key,{
      Fecha:consulta.Fecha,
      Propietario:consulta.Propietario,
      Mascota:consulta.Mascota,
      Servicio:consulta.Servicio,
      Medicamentos:consulta.Medicamentos,
      Motivo:consulta.Motivo,
      Diagnostico:consulta.Diagnostico,
      Total:consulta.Total
    });

  }
  delateConsulta($key:string){
    this.consultaList.remove($key);

  }
}
