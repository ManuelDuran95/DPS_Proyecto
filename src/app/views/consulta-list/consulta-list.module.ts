import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConsultaListComponent} from './consulta-list.component';
import {FormsModule} from '@angular/forms';
import { ConsultaListRoutingModule } from './consulta-list-routing.module';


@NgModule({
  declarations: [ConsultaListComponent],
  imports: [
    CommonModule,
    ConsultaListRoutingModule,
    FormsModule
  ]
})
export class ConsultaListModule { }
