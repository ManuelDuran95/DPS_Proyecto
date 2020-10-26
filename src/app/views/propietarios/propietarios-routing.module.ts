import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PropietariosComponent} from './propietarios.component';

const routes: Routes = [
  {
    path: '',
    data: { 
      title: 'Propietarios'
    },
    children: [
      { 
        path: '',
        redirectTo: 'propietarios'
      },
      {
        path: 'propietarios',
        component: PropietariosComponent,
        data: {
          title: 'Propietarios'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropietariosRoutingModule { }
