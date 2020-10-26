import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MascotasListComponent } from './mascotas-list.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buscar Mascota'
    },
    children: [
      {
        path: '',
        redirectTo: 'mascotas-list'
      },
      {
        path: 'mascotas-list',
        component: MascotasListComponent,
        data: {
          title: 'Buscar Mascota'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasListRoutingModule { }
