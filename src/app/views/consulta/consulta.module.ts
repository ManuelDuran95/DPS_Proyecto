import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ConsultaComponent} from '../consulta/consulta.component';
import { ConsultaRoutingModule } from './consulta-routing.module';


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    FormsModule
  ]
})
export class ConsultaModule { }
