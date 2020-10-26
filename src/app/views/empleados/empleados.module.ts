import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import {EmpleadosComponent} from './empleados.component';


@NgModule({
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    FormsModule
  ],
  declarations: [EmpleadosComponent]
})
export class EmpleadosModule { }
