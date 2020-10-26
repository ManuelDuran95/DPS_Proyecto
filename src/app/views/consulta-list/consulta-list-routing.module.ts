import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaListComponent} from './consulta-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buscar Consultas'
    },
    children: [
      {
        path: '',
        redirectTo: 'consulta-list'
      },
      {
        path: 'consulta-list',
        component: ConsultaListComponent,
        data: {
          title: 'Buscar Consultas'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaListRoutingModule { }
