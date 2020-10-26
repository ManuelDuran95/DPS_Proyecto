import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaComponent} from './consulta.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Consultas'
    },
    children: [
      {
        path: '',
        redirectTo: 'consulta'
      },
      {
        path: 'consulta',
        component: ConsultaComponent,
        data: {
          title: 'Consultas'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
