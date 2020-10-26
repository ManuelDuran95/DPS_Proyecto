import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascotasComponent } from './mascotas.component';
//import { DropdownsComponent } from './mascotas.component';
//import { BrandButtonsComponent } from './brand-buttons.component';

const routes: Routes = [
  {
    path: '',
    data: { 
      title: 'Mascotas'
    },
    children: [
      {
        path: '',
        redirectTo: 'mascotas'
      },
      {
        path: 'mascotas',
        component: MascotasComponent,
        data: {
          title: 'Mascotas'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule {}
