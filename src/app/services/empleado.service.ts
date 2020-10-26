import { Injectable } from '@angular/core'; 
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  empleadoList: AngularFireList<any>;
  selectedEmpleado: Empleado = new Empleado();

  constructor(private firebase: AngularFireDatabase) { }

  getEmpleado() { 
    return this.empleadoList = this.firebase.list('empleados');
   }

   insertEmpleado(nombre:string,apellido:string,telefono:string,dui:string,correo:String,password:String) {
    // agregar un dato al final de la lista
    //this.mascotaList = this.firebase.list('mascotas');
    this.empleadoList.push({
      Nombre: nombre,
      Apellidos:apellido,
      Telefono: telefono,
      DUI:dui,
      Correo: correo,
      Password:password 
       });
      } 

      updateEmpleado($key:string,nombre:string,apellido:string,telefono:string,dui:string,correo:String,password:String) {
        // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
        this.empleadoList.update($key, {
          Nombre: nombre,
          Apellidos: apellido,
          Telefono: telefono,
          DUI:dui,
          Correo: correo,
          Password: password
        });
       }

      deleteEmpleado($key: string) {
        this.empleadoList.remove($key);
      }
}
