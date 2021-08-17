import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPacientesComponent } from './View/Paciente/list-pacientes/list-pacientes.component';
import { AddPacienteComponent } from './View/Paciente/add-paciente/add-paciente.component';
import { EditPacienteComponent } from './View/Paciente/edit-paciente/edit-paciente.component';
import { DashboardComponent } from './View/dashboard/dashboard.component';
import { LoginComponent } from './View/login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'Login', pathMatch:'full'},
  {path: 'Dashboard', component:  DashboardComponent },
  {path: 'Pacientes', component: ListPacientesComponent},
  {path: 'AddPacientes', component: AddPacienteComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'EditPacientes', component: EditPacienteComponent},
  {path: 'EditPacientes/:id', component: EditPacienteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routinComponents = [DashboardComponent, ListPacientesComponent, AddPacienteComponent, EditPacienteComponent]
