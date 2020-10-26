import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
//Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { MascotasComponent } from './components/views/mascotas/mascotas.component';

//servicios
import{MascotaService} from './services/mascota.service';
import{CitaService} from './services/cita.service';
import {EmpleadoService} from './services/empleado.service';
import {ServicioService} from './services/servicio.service';
import {PropietarioService} from './services/propietario.service';
import { ConsultaService } from './services/consulta.service';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './views/verify-email/verify-email.component';
//import { ConsultaComponent } from './views/consulta/consulta.component';
//import { ConsultaListComponent } from './views/consulta-list/consulta-list.component';
//import { PropietariosListComponent } from './views/propietarios-list/propietarios-list.component';
//import { EmpleadosComponent } from './views/empleados/empleados.component';
//import { ServiciosComponent } from './views/servicios/servicios.component';
//import { PropietariosComponent } from './views/propietarios/propietarios.component';
//import { MascotasListComponent } from './views/mascotas-list/mascotas-list.component';
//import { CitasComponent } from './views/citas/citas.component';
import { AuthGuard } from "./views/guard/auth.guard";
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import{AuthService} from './services/auth.service';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    MascotasComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    //ConsultaComponent,
    //ConsultaListComponent,
    //PropietariosListComponent,
    //EmpleadosComponent,
    //ServiciosComponent,
    //PropietariosComponent,
    //MascotasListComponent,
    //CitasComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    
  },
  AuthService,
  MascotaService,
  CitaService,
  EmpleadoService,
  ServicioService,
  PropietarioService,
  ConsultaService,
  AuthGuard,
  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
