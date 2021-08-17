import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule, routinComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { InfoCardComponent } from './Components/info-card/info-card.component';
import { TablaPacienteComponent } from './Components/tabla-paciente/tabla-paciente.component';
//Services
import { PacienteServiceService } from './Services/PacienteService/paciente-service.service';
import { UsuarioServiceService } from './Services/UsuarioService/usuario-service.service';
import { LoginComponent } from './View/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    InfoCardComponent,
    TablaPacienteComponent,
    routinComponents,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PacienteServiceService, UsuarioServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
