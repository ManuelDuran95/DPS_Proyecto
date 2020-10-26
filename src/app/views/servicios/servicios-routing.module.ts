import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiciosComponent} from './servicios.component';

const routes: Routes = [
  {
    path: '',
    data: { 
      title: 'Servicios'
    },
    children: [
      {
        path: '',
        redirectTo: 'servicios'
      },
      {
        path: 'servicios',
        component: ServiciosComponent,
        data: {
          title: 'Servicios'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
