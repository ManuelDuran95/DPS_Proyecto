import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import {Consulta} from '../../models/consulta';
import {ConsultaService} from '../../services/consulta.service';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.css']
})
export class ConsultaListComponent implements OnInit {

  constructor(public consultaService:ConsultaService) { }
consultaList:Consulta[];
  busqueda:string;
ngOnInit(){
  return this.consultaService.getdatos()
  .snapshotChanges().subscribe(item => {
    this.consultaList = [];
    item.forEach(element => {
      let x = element.payload.toJSON();
      x["$key"] = element.key;
      this.consultaList.push(x as Consulta);
    });
  });
  }

  FiltrarConsultas(){
    this.consultaList = this.consultaList.filter(data =>{
    return  data.Propietario.toString().trim()==this.busqueda;
    })

    if(this.consultaList.length==0){
      this.consultaService.getdatos()
    .snapshotChanges().subscribe(item => {
      this.consultaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.consultaList.push(x as Consulta);
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
      this.busqueda ="";
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Encontrado',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
 
}
