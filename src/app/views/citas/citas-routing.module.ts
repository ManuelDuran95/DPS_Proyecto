import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasComponent } from './citas.component';
//import { DropdownsComponent } from './mascotas.component';
//import { BrandButtonsComponent } from './brand-buttons.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'citas'
    },
    children: [
      {
        path: '',
        redirectTo: 'citas'
      },
      {
        path: 'citas',
        component: CitasComponent,
        data: {
          title: 'citas'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule {}
