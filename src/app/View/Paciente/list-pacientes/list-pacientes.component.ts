import { Component, OnInit } from '@angular/core';
import {PacienteServiceService} from '../../../Services/PacienteService/paciente-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pacientes',
  templateUrl: './list-pacientes.component.html',
  styleUrls: ['./list-pacientes.component.css']
})
export class ListPacientesComponent implements OnInit {

  constructor(
    private PacienteServiceService: PacienteServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }



}
