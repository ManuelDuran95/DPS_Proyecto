import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PropietariosListRoutingModule } from './propietarios-list-routing.module';
import {PropietariosListComponent} from './propietarios-list.component';

@NgModule({
  imports: [
    CommonModule,
    PropietariosListRoutingModule,
    FormsModule
  ],
  declarations: [PropietariosListComponent]
})
export class PropietariosListModule { }
