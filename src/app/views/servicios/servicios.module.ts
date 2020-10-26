import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ServiciosRoutingModule } from './servicios-routing.module';
import {ServiciosComponent} from './servicios.component';

@NgModule({
  declarations: [ServiciosComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FormsModule
  ]
})
export class ServiciosModule { }
