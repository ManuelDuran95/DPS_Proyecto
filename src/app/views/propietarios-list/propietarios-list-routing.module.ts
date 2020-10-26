import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PropietariosListComponent} from './propietarios-list.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buscar Propietario'
    },
    children: [
      {
        path: '',
        redirectTo: 'propietarios-list'
      },
      {
        path: 'propietarios-list',
        component: PropietariosListComponent,
        data: {
          title: 'Buscar Propietario'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropietariosListRoutingModule { }
