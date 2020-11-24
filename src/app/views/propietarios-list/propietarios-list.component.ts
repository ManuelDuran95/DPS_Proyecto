import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import {Propietario} from '../../models/propietario';
import {PropietarioService} from '../../services/propietario.service';


@Component({
  selector: 'app-propietarios-list',
  templateUrl: './propietarios-list.component.html',
  styleUrls: ['./propietarios-list.component.css']
})
export class PropietariosListComponent implements OnInit {
  propietarioList: Propietario[];
  busqueda:string;
  $key:string;
  nombre:string;
  apellidos:string;
  direccion:string; 
  telefono:string;
  dui:string;
  correo:string;
  contra:string;

  constructor(private propietarioService:PropietarioService) { }

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

  Buscar(){
    this.propietarioList = this.propietarioList.filter(data =>{
    return  data.DUI.toString().trim()==this.busqueda;
    })

    if(this.propietarioList.length==0){
      this.propietarioService.getPropietario()
    .snapshotChanges().subscribe(item => {
      this.propietarioList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.propietarioList.push(x as Propietario);
      });
    });
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Registro No Encontrado',
      showConfirmButton: false,
      timer: 1500
    })
      this.busqueda='';
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

  Actualizar(){
    this.propietarioService.updatePropietario(this.$key,
      this.nombre,
      this.apellidos,
      this.dui,
      this.direccion,
      this.telefono,
      this.correo,
      this.contra
     );
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Actualizado',
        showConfirmButton: false,
        timer: 1500
      })
      this.resetForm();
  }

  Editar(propietario: Propietario) {
    this.$key = propietario.$key;
    this.nombre = propietario.Nombre;
    this.apellidos = propietario.Apellidos;
    this.direccion = propietario.Direccion;
    this.telefono = propietario.Telefono;
    this.dui = propietario.DUI;
    this.correo = propietario.Correo;
    this.contra = propietario.Password;
    //this.propietarioService.selectedPropietario = Object.assign({}, propietario);
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
        this.propietarioService.deletePropietario($key);
        Swal.fire(
          '¡Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )
      }
    })
  }

  resetForm() {
    this.propietarioService.selectedPropietario = new Propietario();
  }

}
