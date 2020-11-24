import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import {Mascota} from '../../models/mascota';
import {MascotaService} from '../../services/mascota.service';

@Component({
  selector: 'app-mascotas-list',
  templateUrl: './mascotas-list.component.html',
  styleUrls: ['./mascotas-list.component.css']
})
export class MascotasListComponent implements OnInit {

  constructor( public mascotaService:MascotaService) { }
mascotaList:Mascota[];
$key:string;
busqueda:string;
Nombre_mascota:string;
  Especie:string;
  Raza:string;
  Color:string;
  Fecha_nacimiento:string;
  Nombre_propietario:string;

  ngOnInit(){
    return this.mascotaService.getdatos()
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

  Buscar(){
    this.mascotaList = this.mascotaList.filter(data =>{
    return  data.Nombre_propietario.toString().trim()==this.busqueda;
    })

    if(this.mascotaList.length==0){
      this.mascotaService.getdatos()
    .snapshotChanges().subscribe(item => {
      this.mascotaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.mascotaList.push(x as Mascota);
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
    this.mascotaService.updateMascota(this.$key,
      this.Nombre_mascota,
      this.Nombre_propietario,
      this.Especie,
      this.Raza,
      this.Color,
      this.Fecha_nacimiento
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

  Editar(mascota: Mascota) {
    this.$key = mascota.$key;
    this.Nombre_mascota = mascota.Nombre_mascota;
    this.Nombre_propietario = mascota.Nombre_propietario;
    this.Especie = mascota.Especie;
    this.Raza = mascota.Raza;
    this.Color = mascota.Color;
    this.Fecha_nacimiento = mascota.Fecha_nacimiento;

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
        this.mascotaService.deleteMascota($key);
        Swal.fire(
          '¡Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )
      }
    })
  }

  resetForm() {
    this.mascotaService.selectedMascota = new Mascota();
  }

}
