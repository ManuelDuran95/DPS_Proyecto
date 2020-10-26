import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpleadosComponent} from './empleados.component';


const routes: Routes = [
  {
    path: '',
    data: { 
      title: 'Empleados'
    },
    children: [
      {
        path: '',
        redirectTo: 'empleados'
      },
      {
        path: 'empleados',
        component: EmpleadosComponent,
        data: {
          title: 'Empleados'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
