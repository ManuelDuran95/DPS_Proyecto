import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {PropietariosComponent} from './propietarios.component';
import { PropietariosRoutingModule } from './propietarios-routing.module';


@NgModule({
  imports: [ 
    CommonModule,
    PropietariosRoutingModule,
    FormsModule
  ],
  declarations: [PropietariosComponent]
})
export class PropietariosModule { }
