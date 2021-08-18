import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {PacienteServiceService} from '../../../Services/PacienteService/paciente-service.service'
import { Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import { IPacientes } from 'src/app/Models/Pacientes-interface';
@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {

  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private PacienteServiceService: PacienteServiceService
  ) { }
  datosPacientes: IPacientes[] = [];

  editForm = new FormGroup({
    //paciente
    paccienteId: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    tipo_Documento  : new FormControl(''),
    valor_Tipo_Contenido : new FormControl(''),
    edad  : new FormControl(''),
    fecha_Nacimiento : new FormControl(''),
    nacionalidad    : new FormControl(''),
    celular : new FormControl(''),
    direccion : new FormControl(''),
    motivoConsulta  : new FormControl(''),


  });
  ngOnInit(): void {
    let pacientesid = this.activerouter.snapshot.paramMap.get('paccienteId');
    this.PacienteServiceService.getPacientesById(pacientesid).subscribe((res:any)=>{
      this.datosPacientes.push(res);



      this.editForm.setValue({
        //paciente
    paccienteId : this.datosPacientes[0].paccienteId,
    nombre: this.datosPacientes[0].nombre,
    apellido: this.datosPacientes[0].apellido,
    tipo_Documento  : this.datosPacientes[0].tipo_Documento,
    valor_Tipo_Contenido : this.datosPacientes[0].valor_Tipo_Contenido,
    edad  : this.datosPacientes[0].edad,
    fecha_Nacimiento : this.datosPacientes[0].fecha_Nacimiento,
    nacionalidad    : this.datosPacientes[0].nacionalidad,
    celular : this.datosPacientes[0].celular,
    direccion : this.datosPacientes[0].direccion,
    motivoConsulta  : this.datosPacientes[0].motivoConsulta,




      });
      console.log('Api',this.datosPacientes[0])
console.log('Historial',this.datosPacientes[0])
    })
  }

  postForm(form: IPacientes) {
    this.PacienteServiceService.putPaciente(form).subscribe((res: any) => {

    Swal.fire({

      icon: 'success',
      title: 'Registro modificado con exito',
      showConfirmButton: false,
      timer: 1500
    })

    });
    console.log('Variable form', form);
  }





  eliminar() {
    let datos: IPacientes = this.editForm.value;
    this.PacienteServiceService.deletePaciente(datos).subscribe((res: any) => {

      Swal.fire({

        icon: 'success',
        title: 'Registro eliminado con exito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['Pacientes']);
    });

  }
}
