import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Propietario} from '../models/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
propietarioList: AngularFireList<any>;
selectedPropietario: Propietario;

  constructor(private firebase: AngularFireDatabase) { }

  getPropietario() { 
    return this.propietarioList = this.firebase.list('propietarios');
   }

  insertPropietario(nombre:string,apellido:string,dui:string,direccion:string,telefono:string,correo:String,password:string) {
    // agregar un dato al final de la lista
    //this.mascotaList = this.firebase.list('mascotas');
    this.propietarioList.push({
      Nombre: nombre,
      Apellidos: apellido,
      DUI: dui,
      Direccion:direccion,
      Telefono: telefono,
      Correo: correo,
      Password:password
       }); 
      } 

      updatePropietario($key:string,nombre:string,apellido:string,dui:string,direccion:string,telefono:string,correo:String,password:string) {
        // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
        this.propietarioList.update($key, {
          Nombre: nombre,
          Apellidos: apellido,
          DUI:dui,
          Direccion: direccion,
          Telefono: telefono,
          Correo: correo,
          Password: password
        });
       }

      deletePropietario($key: string) {
        this.propietarioList.remove($key);
      }
}
