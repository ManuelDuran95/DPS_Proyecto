import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Servicio} from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  servicioList: AngularFireList<any>;
  selectedServicio: Servicio = new Servicio();
  constructor(private firebase: AngularFireDatabase) { }

  getServicio() { 
    return this.servicioList = this.firebase.list('servicios');
   }

   insertServicio(descripcion:string,costo:number) {
    // agregar un dato al final de la lista
    //this.mascotaList = this.firebase.list('mascotas');
    this.servicioList.push({
      Descripcion: descripcion,
      Costo: costo
       });
      } 

      updateServicio($key:string,descripcion:string,costo:number) {
        // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
        this.servicioList.update($key, {
          Descripcion: descripcion,
          Costo: costo
        });
       }

      deleteServicio($key: string) {
        this.servicioList.remove($key);
      }
}
