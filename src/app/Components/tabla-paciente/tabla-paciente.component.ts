import { Component, OnInit } from '@angular/core';
import {PacienteServiceService} from '../../Services/PacienteService/paciente-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabla-paciente',
  templateUrl: './tabla-paciente.component.html',
  styleUrls: ['./tabla-paciente.component.css']
})
export class TablaPacienteComponent implements OnInit {

  constructor(
    private PacienteServiceService: PacienteServiceService,
    private router: Router
  ) { }
  Pacientes: any[] = [];
  ngOnInit(): void {
    this.MostarPaciente();
  }

  public MostarPaciente() {
    this.PacienteServiceService.getPacientes().subscribe((resp:any) => {
      this.Pacientes = resp;
    });
  }
  public nuevopaciente(){
    this.router.navigate(['AddPacientes']);
  }
}
