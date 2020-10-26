import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MascotasListRoutingModule } from './mascotas-list-routing.module';

import { MascotasListComponent } from './mascotas-list.component';

@NgModule({
  declarations: [
    MascotasListComponent
  ],
  imports: [
    CommonModule,
    MascotasListRoutingModule,
    FormsModule
  ]
})
export class MascotasListModule { }
