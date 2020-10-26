import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MascotasComponent } from './mascotas.component';
//import { BrandButtonsComponent } from './brand-buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//import { DropdownsComponent } from './dropdowns.component';

// Buttons Routing
import { MascotasRoutingModule } from './mascotas-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule, 
    MascotasRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    MascotasComponent,
   
  ]
})
export class MascotasModule { }
