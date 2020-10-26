import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
 
import { CitasComponent } from './citas.component';
//import { BrandButtonsComponent } from './brand-buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//import { DropdownsComponent } from './dropdowns.component';

// Buttons Routing
import { CitasRoutingModule } from './citas-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    CitasRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    CitasComponent,
   
  ]
})
export class CitasModule { }
