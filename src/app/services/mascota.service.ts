import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root' 
}) 
export class MascotaService {
mascotaList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  getdatos() { 
    return this.mascotaList = this.firebase.list('mascotas');
   }
   insertdatos(nombre_mascota:string,raza:string,color:string,especie:string,fecha_nacimiento:String,nombre_propietario:String) {
    // agregar un dato al final de la lista
    //this.mascotaList = this.firebase.list('mascotas');
    this.mascotaList.push({
      Nombre_mascota: nombre_mascota,
      Raza: raza,
      Color: color,
      Especie:especie,
      Fecha_nacimiento: fecha_nacimiento,
      Nombre_propietario: nombre_propietario,
       });
      }

      deleteMascota($key: string) {
        this.mascotaList.remove($key);
      }
}
