import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Mascota } from '../models/mascota';

@Injectable({
  providedIn: 'root' 
}) 
export class MascotaService {
mascotaList: AngularFireList<any>;
selectedMascota: Mascota;
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

      updateMascota($key:string,nombre,propietario:string,especie:string,raza:string,color:string,fecha:string) {
        // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
        this.mascotaList.update($key, {
          Nombre_mascota: nombre, 
          Raza: raza,
          Color: color,
          Especie:especie,
          Fecha_nacimiento: fecha,
          Nombre_propietario: propietario,
        });
       }
      deleteMascota($key: string) {
        this.mascotaList.remove($key);
      }
}
