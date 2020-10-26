import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import {Empleado} from '../../models/empleado';
import {EmpleadoService} from '../../services/empleado.service';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

 
  constructor(

    public empleadoService: EmpleadoService
  ) { }

  empleadoList: Empleado[];
  $key:string;
  nombre:string;
  apellido:string;
  correo:string;
  telefono:string;
  dui:string;
  password:string;

  ngOnInit(){
    return this.empleadoService.getEmpleado().snapshotChanges().subscribe(item => {
        this.empleadoList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.empleadoList.push(x as Empleado);
        });
        console.log(this.empleadoList);
      });
      
  } 

  Registrar() {
    this.empleadoService.insertEmpleado(this.nombre,this.apellido,this.telefono,this.dui,this.correo,this.password);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Empleado Ingresado', 
      showConfirmButton: false,
      timer: 1500
    })
    this.resetForm();
  }
  Actualizar(Nombre:string,Apellidos:string,Correo:string,Telefono:string,DUI:string,Password:string){
    this.empleadoService.updateEmpleado(this.empleadoService.selectedEmpleado.$key,
      Nombre,
      Apellidos,
      Telefono,
      DUI,
      Correo,
      Password);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Actualizado',
        showConfirmButton: false,
        timer: 1500
      })
      this.resetForm();
  }

  Editar(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = Object.assign({}, empleado);
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
        this.empleadoService.deleteEmpleado($key);
        Swal.fire(
          '¡Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )
      }
    })
  }

  resetForm() {
    this.nombre='';
    this.apellido='';
    this.telefono='';
    this.dui='';
    this.correo='';
    this.password='';
    this.empleadoService.selectedEmpleado = new Empleado();
  }

}
